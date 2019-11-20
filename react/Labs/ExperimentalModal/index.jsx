import React, { Component } from 'react'

import Modal, {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalButtons
} from 'cozy-ui/react/Modal'
import { Button, Icon } from 'cozy-ui/react'
import withBreakpoints from 'cozy-ui/react/helpers/withBreakpoints'
import classNames from 'classnames'
import styles from './styles.styl'

class ExperimentalModal extends Component {
  render() {
    const {
      title,
      dismissAction,
      primaryAction,
      primaryText,
      secondaryText,
      secondaryAction,
      description,
      descriptionFooter,
      breakpoints: { isMobile }
    } = this.props
    return (
      <Modal
        mobileFullscreen
        closable={isMobile && title ? false : true}
        size="large"
        title={isMobile ? '' : title}
        dismissAction={dismissAction}
      >
        {isMobile && title && (
          <ModalHeader className={classNames(styles['modal-header'])}>
            <h2>{title}</h2>

            <Button
              icon={<Icon icon={'cross'} size={'16'} />}
              onClick={() => dismissAction()}
              iconOnly
              label={'close'}
              subtle
              theme={'secondary'}
            />
          </ModalHeader>
        )}
        <ModalContent
          className={classNames({
            ['u-flex-grow-1 u-ph-1']: isMobile,
            ['u-flex u-flex-column']: descriptionFooter
          })}
        >
          {descriptionFooter ? (
            <div className="u-flex-grow-1">{description}</div>
          ) : (
            <>{description}</>
          )}
          {descriptionFooter}
        </ModalContent>
        {primaryText && primaryAction && (
          <ModalFooter
            className={classNames({
              [styles['modal-footer']]: isMobile
            })}
          >
            <ModalButtons
              primaryText={primaryText}
              primaryAction={primaryAction}
              primaryType={'regular'}
              secondaryText={secondaryText}
              secondaryAction={secondaryAction}
              secondaryType={'secondary'}
            />
          </ModalFooter>
        )}
      </Modal>
    )
  }
}

export default withBreakpoints()(ExperimentalModal)
