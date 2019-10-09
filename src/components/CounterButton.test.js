import React from 'react'
import { shallow } from 'enzyme'
import CounterButton from './CounterButton'

it('expect to render CounterButton component', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot()
})

it('correctly increments the counter', () => {
  const wrapper = shallow(<CounterButton />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 })
  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 4 })
  expect(wrapper.props().color).toEqual(undefined)
})
