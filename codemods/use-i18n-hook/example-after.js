import React from 'react'
import { Text, useI18n } from 'cozy-ui/transpiled/react'

const ComponentUsingT = () => {
  const { t } = useI18n()

  return (
    <Padded>
      <Title>{t('Title1')}</Title>
      <Text>{t('Text1')}</Text>
    </Padded>
  )
}

const DumbComponentUsingTAndF = () => {
  const { t,f } = useI18n()

  return (
    <Padded>
      <Title>{t('Title2')}</Title>
      <Text>{f(new Date())}</Text>
    </Padded>
  )
}

const EnhancedComponentUsingTAndF = DumbComponentUsingTAndF

const DumbDefaultSimpleComponent = () => {
  const { t } = useI18n()
  return <div>t('Hello')</div>
}

export default compose(hoc1, hoc2)(DumbDefaultSimpleComponent)
