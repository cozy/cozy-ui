import get from 'lodash/get'

import { useSelectedGroup } from './GroupsSelectProvider'
import { isExistingGroup } from './helpers'
import { locales } from './locales'
import { useAlert } from '../../providers/Alert'
import { useI18n, useExtendI18n } from '../../providers/I18n'

const useGroupsSelect = ({
  allGroups,
  onGroupCreated,
  client,
  onGroupCreate,
  onGroupUpdate
}) => {
  const { selectedGroup, setSelectedGroup } = useSelectedGroup()
  const { showAlert } = useAlert()
  useExtendI18n(locales)
  const { t } = useI18n()

  const createGroupSelf = async group => {
    if (!group.name) return

    if (isExistingGroup(allGroups, group)) {
      return showAlert({
        severity: 'error',
        message: t('Contacts.GroupsSelect.already_exists', {
          name: group.name
        })
      })
    }

    try {
      const { data: createdGroup } = await onGroupCreate(client, group)
      if (onGroupCreated) {
        onGroupCreated(createdGroup)
      }
      return showAlert({
        severity: 'success',
        message: t('Contacts.GroupsSelect.created.success')
      })
    } catch {
      return showAlert({
        severity: 'error',
        message: t('Contacts.GroupsSelect.created.error')
      })
    }
  }

  const renameGroupSelf = async (groupId, newName) => {
    const group = allGroups.find(group => group.id === groupId)
    const allOtherGroups = allGroups.filter(group => group.id !== groupId)
    const isRenamedGroupSelected =
      get(group, '_id') === get(selectedGroup, '_id')

    if (isExistingGroup(allOtherGroups, { name: newName })) {
      return showAlert({
        severity: 'error',
        message: t('Contacts.GroupsSelect.already_exists', {
          name: newName
        })
      })
    }

    try {
      const { data } = await onGroupUpdate(client, { ...group, name: newName })
      if (isRenamedGroupSelected) {
        setSelectedGroup(data)
      }
      return showAlert({
        severity: 'success',
        message: t('Contacts.GroupsSelect.renamed.success')
      })
    } catch {
      return showAlert({
        severity: 'error',
        message: t('Contacts.GroupsSelect.renamed.error')
      })
    }
  }

  return {
    createGroup: createGroupSelf,
    renameGroup: renameGroupSelf
  }
}

export default useGroupsSelect
