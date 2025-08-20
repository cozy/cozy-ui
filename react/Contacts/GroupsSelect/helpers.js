export const isExistingGroup = (groupsAlreadyCreated, groupToCreate) => {
  const isNameAlreadyUsed =
    groupsAlreadyCreated.find(
      group => group.name.toLowerCase() === groupToCreate.name.toLowerCase()
    ) !== undefined

  return isNameAlreadyUsed
}

/**
 * Returns the group defined as default in the group filter
 */
export const defaultSelectedGroup = {
  name: 'Contacts.GroupsSelect.filter.all-groups',
  withNoAction: true
}

/**
 * Returns the translated group defined as default in the group filter
 * @param {function} t - Translate
 */
export const translatedDefaultSelectedGroup = t => ({
  ...defaultSelectedGroup,
  name: t(defaultSelectedGroup.name)
})
