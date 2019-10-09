import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

let wrapper, wrapper2, wrapper3
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: 'a',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'john',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'john',
    isPending: false
  }
  wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'john',
      email: 'john@gmail.com'
    }
  ])
})

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'john',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: false
  }
  wrapper3 = shallow(<MainPage {...mockProps3} />)
  expect(wrapper3.instance().filterRobots()).toEqual([])
})

// redux-mock-store
