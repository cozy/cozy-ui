import React from 'react'
import Chips from './index'

export default {
  title: 'React/Chips',
  component: Chips
}

const Template = args => {
  console.log('==========')
  console.log('args : ', args)
  console.log('==========')
  return <Chips {...args} label="TEST" color="error" />
}

export const Default = Template.bind({})
