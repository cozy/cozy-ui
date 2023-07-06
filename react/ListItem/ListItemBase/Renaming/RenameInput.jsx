import React, { useEffect, useReducer, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { splitFilename } from 'cozy-client/dist/models/file'

import { makeStyles } from '../../../styles'
import Input from '../../../Input'
import InputGroup from '../../../InputGroup'
import Spinner from '../../../Spinner'

import RenameDialog from './RenameDialog'
import { renameFile } from './helpers'

const KEYS = {
  ESCAPE: 'Escape',
  ENTER: 'Enter'
}

const useStyles = makeStyles({
  inputGroup: {
    maxWidth: 'none',
    height: '2rem',
    margin: '1rem 1rem 1rem 0',
    '& > div': {
      display: 'flex'
    },
    '& input': {
      maxWidth: 'none',
      padding: '.3125rem'
    }
  },
  spinner: {
    margin: '.4375rem'
  }
})

const RenameInput = ({ file, onClose }) => {
  const client = useClient()
  const styles = useStyles()
  const textInput = useRef()
  const [isBusy, toggleBusy] = useReducer(prev => !prev, false)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const defaultValue = file.name

  const check = async () => {
    const { value } = textInput.current
    if (value === '' || value === '.' || value === '..') {
      await submit()
      return
    }
    const oldExtension = splitFilename({
      name: defaultValue,
      type: 'file'
    }).extension
    const newExtension = splitFilename({
      name: value,
      type: 'file'
    }).extension
    if (oldExtension === newExtension) {
      await submit()
      return
    }
    setIsModalOpened(true)
  }

  const submit = async () => {
    const { value } = textInput.current
    await close(value)
  }

  const cancel = async () => {
    await close(defaultValue)
  }

  const close = async value => {
    toggleBusy()
    if (value !== defaultValue) {
      await renameFile(client, file, value)
    }
    onClose()
  }

  const handleKeyDown = async event => {
    if (event.key === KEYS.ENTER) {
      await check()
    } else if (event.key === KEYS.ESCAPE) {
      await cancel()
    }
  }

  const handleBlur = async () => {
    // On top of "normal" blurs, the event happens all the time after a submit or a cancel, because this component is removed from the DOM while having the focus.
    // we want to do things only on "normal" blurs, *not* after a cancel
    if (!isModalOpened && !isBusy) {
      await check()
    }
  }

  const handleFocus = () => {
    const { length } = splitFilename({
      name: defaultValue,
      type: 'file'
    }).filename

    textInput.current.setSelectionRange(0, length)
  }

  useEffect(() => {
    textInput.current.focus()
  }, [])

  return (
    <InputGroup className={styles.inputGroup}>
      <Input
        ref={textInput}
        type="text"
        defaultValue={defaultValue}
        disabled={isModalOpened || isBusy}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
      {(isModalOpened || isBusy) && <Spinner className={styles.spinner} />}
      {isModalOpened && <RenameDialog onSubmit={submit} onCancel={cancel} />}
    </InputGroup>
  )
}

RenameInput.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}

export default RenameInput
