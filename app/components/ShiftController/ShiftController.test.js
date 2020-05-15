import React from 'react'
import ShiftController from './ShiftController'
import { fireEvent, render } from '@testing-library/react-native'
import * as redux from 'react-redux'
import shiftSlice from '../../state/shiftSlice'

describe('HandWashComponent', () => {
  let state
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    redux.useSelector = selector => selector(state)
    redux.useDispatch = () => dispatch
  })

  it('renders correctly when off shift', () => {
    state = {
      shift: { onShift: false },
    }
    const { baseElement } = render(<ShiftController />)

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly when on shift', () => {
    state = {
      shift: { onShift: true },
    }
    const { baseElement } = render(<ShiftController />)

    expect(baseElement).toMatchSnapshot()
  })

  it('dispatches `startShift` action when user presses button', async () => {
    state = {
      shift: { onShift: false },
    }
    const { baseElement, getByTestId } = render(<ShiftController />)

    const button = getByTestId('shift-button')
    fireEvent.press(button)

    expect(dispatch).toHaveBeenCalledWith(shiftSlice.actions.startShift())

    expect(baseElement).toMatchSnapshot()
  })
})
