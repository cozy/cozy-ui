import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import MemberAutocompleteActions from './MemberAutocompleteActions'
import MemberChip from './MemberChip'
import MemberSuggestion from './MemberSuggestion'
import { getUnpickedMembers, isEmailLike } from './helpers'
import { locales } from './locales'
import { useMemberInput } from './useMemberInput'
import { useMemberSuggestions } from './useMemberSuggestions'
import { useRoleMenuFocus } from './useRoleMenuFocus'
import Autocomplete from '../Autocomplete'
import Buttons from '../Buttons'
import { memberPropType, rolesPropType } from '../MemberRow/propTypes'
import TextField from '../TextField'
import Typography from '../Typography'
import { getRandomUUID } from '../helpers/getRandomUUID'
import { makeStyles } from '../styles'

const LIMIT_TAGS = 3

const useStyles = makeStyles({
  inputRoot: {
    '&&': {
      padding: '.375rem .5625rem',
      paddingRight: ({ actionsWidth }) =>
        actionsWidth > 0 ? `calc(${actionsWidth}px + 1.5rem)` : null
    }
  },
  input: {
    '&&': {
      padding: '.59375rem .25rem'
    },
    '&&:first-child': {
      paddingLeft: '.4375rem'
    }
  },
  submit: {
    marginTop: '.3125rem'
  },
  listbox: {
    maxHeight: '9rem'
  },
  option: {
    '&[aria-selected="true"]': {
      backgroundColor: 'transparent'
    },
    '&[data-focus="true"], &:active': {
      backgroundColor: 'var(--actionColorSelected)'
    }
  }
})

/**
 * Field to pick the members to invite among suggestions, shown as chips
 */
const MemberAutocomplete = ({
  value,
  getSuggestions = () => [],
  fetchSuggestions,
  getMembersFromText = () => [],
  minQueryLength = 3,
  debounceMs = 300,
  roles,
  role,
  title,
  placeholder,
  loading = false,
  disabled = false,
  autoFocus = false,
  onChange,
  onRoleChange,
  onSubmit
}) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const [inputId] = useState(getRandomUUID)
  const [inputValue, setInputValue] = useState('')
  const [actionsWidth, setActionsWidth] = useState(0)
  const classes = useStyles({ actionsWidth })
  const { suggestions, isFetching } = useMemberSuggestions({
    inputValue,
    getSuggestions,
    fetchSuggestions,
    getMembersFromText,
    minQueryLength,
    debounceMs
  })
  const {
    handleChange,
    handleInputChange,
    handleKeyDown,
    handlePaste,
    handleBlur
  } = useMemberInput({
    inputValue,
    value,
    suggestions,
    getMembersFromText,
    onInputValueChange: setInputValue,
    onChange
  })
  const {
    isFocusKept,
    handleRoleMenuOpen,
    handleRoleMenuClose,
    handleInputFocus
  } = useRoleMenuFocus(inputId)

  const titleId = `${inputId}-title`
  const isTitleShown = title !== undefined
  const isSubmitShown = onSubmit !== undefined
  const hasMembersToSend = value.length > 0 || isEmailLike(inputValue)
  const isLoading = loading || isFetching
  const unpickedSuggestions = getUnpickedMembers(suggestions, value)
  const fieldPlaceholder = value.length === 0 ? placeholder : undefined

  return (
    <div>
      {isTitleShown && (
        <Typography id={titleId} variant="h5" className="u-mb-half">
          {title}
        </Typography>
      )}
      <div className="u-flex u-flex-items-start">
        <Autocomplete
          className="u-flex-grow-1"
          classes={{
            inputRoot: classes.inputRoot,
            input: classes.input,
            paper: 'u-mv-half u-bdrs-4',
            listbox: cx('u-pv-half', classes.listbox),
            option: cx('u-p-0 u-mih-auto', classes.option)
          }}
          id={inputId}
          multiple
          freeSolo
          autoHighlight
          disableClearable
          limitTags={isFocusKept ? -1 : LIMIT_TAGS}
          disabled={disabled}
          options={unpickedSuggestions}
          value={value}
          inputValue={inputValue}
          filterOptions={allOptions => allOptions}
          getOptionLabel={option => option.name ?? option}
          getOptionSelected={(option, picked) => option.id === picked.id}
          renderOption={suggestion => (
            <MemberSuggestion suggestion={suggestion} />
          )}
          renderTags={(members, getTagProps) =>
            members.map((member, index) => (
              <MemberChip
                key={member.id}
                member={member}
                tagProps={getTagProps({ index })}
              />
            ))
          }
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              type="email"
              placeholder={fieldPlaceholder}
              autoFocus={autoFocus}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <MemberAutocompleteActions
                    roles={roles}
                    role={role}
                    isLoading={isLoading}
                    disabled={disabled}
                    onRoleChange={onRoleChange}
                    onRoleMenuOpen={handleRoleMenuOpen}
                    onRoleMenuClose={handleRoleMenuClose}
                    onWidthChange={setActionsWidth}
                  />
                )
              }}
              inputProps={{
                ...params.inputProps,
                'aria-labelledby': isTitleShown ? titleId : undefined,
                onKeyDown: handleKeyDown,
                onPaste: handlePaste
              }}
              focused={isFocusKept || undefined}
              onFocus={handleInputFocus}
              onBlur={handleBlur}
            />
          )}
          onChange={handleChange}
          onInputChange={handleInputChange}
        />
        {isSubmitShown && (
          <Buttons
            className={cx('u-ml-1', classes.submit)}
            label={t('MemberAutocomplete.send')}
            disabled={disabled || !hasMembersToSend}
            onClick={onSubmit}
          />
        )}
      </div>
    </div>
  )
}

MemberAutocomplete.propTypes = {
  /** Picked members, see `MemberRow` */
  value: PropTypes.arrayOf(memberPropType).isRequired,
  /** Returns the local members matching a text */
  getSuggestions: PropTypes.func,
  /** Resolves with the remote members matching a text, shown before the local ones */
  fetchSuggestions: PropTypes.func,
  /** Turns a typed or pasted text (e.g. emails) into members, suggested when nothing matches.
   * Give them the `email` of the person, so that a suggested or picked one replaces them */
  getMembersFromText: PropTypes.func,
  /** Text length from which `fetchSuggestions` is called */
  minQueryLength: PropTypes.number,
  /** Delay before calling `fetchSuggestions` */
  debounceMs: PropTypes.number,
  /** Roles the members can get, as `{ value, label }` */
  roles: rolesPropType,
  /** Role given to the picked members */
  role: PropTypes.string,
  /** Title shown above the field */
  title: PropTypes.string,
  /** Placeholder of the field, shown while no member is picked */
  placeholder: PropTypes.string,
  /** Whether the suggestions are loading */
  loading: PropTypes.bool,
  /** Whether the field is disabled */
  disabled: PropTypes.bool,
  /** Whether the field takes the focus */
  autoFocus: PropTypes.bool,
  /** Called with the picked members */
  onChange: PropTypes.func.isRequired,
  /** Called with the new role */
  onRoleChange: PropTypes.func,
  /** Shows a send button calling it */
  onSubmit: PropTypes.func
}

export default MemberAutocomplete
