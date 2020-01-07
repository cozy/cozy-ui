import React from 'react'
import { translate, Text, Modal } from 'cozy-ui/transpiled/react'

import OtherImports from 'other/imports'

const ComponentUsingT = translate()(({ t }) => (
  <Padded>
    <Title>{t('Title1')}</Title>
    <Text>{t('Text1')}</Text>
  </Padded>
))

const DumbComponentUsingTAndF = ({ t, f }) => (
  <Padded>
    <Title>{t('Title2')}</Title>
    <Text>{f(new Date())}</Text>
  </Padded>
)

const EnhancedComponentUsingTAndF = translate()(DumbComponentUsingTAndF)

const DumbDefaultSimpleComponent = ({ t }) => <div>t('Hello')</div>

export default compose(
  hoc1,
  hoc2,
  translate()
)(DumbDefaultSimpleComponent)
