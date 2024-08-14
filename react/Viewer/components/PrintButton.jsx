import PropTypes from 'prop-types'
import React, { useState, useEffect, forwardRef } from 'react'

import { useWebviewIntent } from 'cozy-intent'

import { makeActions } from '../../ActionsMenu/Actions/helpers'
import { print } from '../../ActionsMenu/Actions/print'
import ActionsItems, {
  actionsItemsComponentPropTypes
} from '../../ActionsMenu/ActionsItems'
import Button from '../../Buttons'
import Icon from '../../Icon'
import IconButton from '../../IconButton'

const ActionComponent = forwardRef(({ action, variant, onClick }, ref) => {
  const { label, icon } = action

  if (variant === 'button') {
    return (
      <Button
        ref={ref}
        variant="secondary"
        aria-label={label}
        label={<Icon icon={icon} />}
        onClick={onClick}
      />
    )
  }

  return (
    <IconButton
      ref={ref}
      className="u-white"
      aria-label={label}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </IconButton>
  )
})

ActionComponent.displayName = 'ActionComponent'

ActionComponent.propTypes = {
  ...actionsItemsComponentPropTypes,
  variant: PropTypes.oneOf(['default', 'button'])
}

const PrintButton = ({ file, variant }) => {
  const [isPrintAvailable, setIsPrintAvailable] = useState(false)
  const webviewIntent = useWebviewIntent()

  const isPDFDoc = file.mime === 'application/pdf'
  const showPrintButton = isPDFDoc && isPrintAvailable

  useEffect(() => {
    const init = async () => {
      const isAvailable =
        (await webviewIntent?.call('isAvailable', 'print')) ?? true

      setIsPrintAvailable(isAvailable)
    }

    init()
  }, [webviewIntent])

  if (!showPrintButton) return null

  const actions = makeActions([print])

  return (
    <ActionsItems
      docs={[file]}
      actions={actions}
      component={ActionComponent}
      variant={variant}
    />
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
