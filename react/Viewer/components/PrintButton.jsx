import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { useWebviewIntent } from 'cozy-intent'

import Button from '../../Buttons'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import { print } from '../../ActionsMenu/Actions/print'

const PrintButton = ({ file, variant }) => {
  const [isPrintAvailable, setIsPrintAvailable] = useState(false)
  const client = useClient()
  const webviewIntent = useWebviewIntent()
  const {
    icon: printIcon,
    label: printLabel,
    action: printAction,
    displayCondition: printDisplayCondition
  } = print()

  const isPDFDoc = file.mime === 'application/pdf'
  const showPrintButton = printDisplayCondition && isPDFDoc && isPrintAvailable

  const handleClick = async () =>
    await printAction([file], { client, webviewIntent })

  useEffect(() => {
    const init = async () => {
      const isAvailable =
        (await webviewIntent?.call('isAvailable', 'print')) ?? true

      setIsPrintAvailable(isAvailable)
    }

    init()
  }, [webviewIntent])

  if (!showPrintButton) return null

  if (variant === 'button') {
    return (
      <Button
        variant="secondary"
        aria-label={printLabel}
        label={<Icon icon={printIcon} />}
        onClick={handleClick}
      />
    )
  }

  return (
    <IconButton
      className="u-white"
      aria-label={printLabel}
      onClick={handleClick}
    >
      <Icon icon={printIcon} />
    </IconButton>
  )
}

PrintButton.propTypes = {
  file: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['default', 'button'])
}

PrintButton.defaultProps = {
  variant: 'default'
}

export default PrintButton
