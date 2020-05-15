import React from 'react'
import HandWashScreen from './HandWashScreen'
import { render } from '@testing-library/react-native'
import * as redux from 'react-redux'

describe('HandWashComponent', () => {
  let state
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    redux.useSelector = selector => selector(state)
    redux.useDispatch = () => dispatch
  })

  it('renders correctly', () => {
    state = {
      shift: { onShift: false },
    }
    const { baseElement } = render(<HandWashScreen />)

    expect(baseElement).toMatchSnapshot()
  })
})
