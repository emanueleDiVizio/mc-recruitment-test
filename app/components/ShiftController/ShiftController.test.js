import React from 'react'
import ShiftController from './ShiftController'
import { fireEvent, render } from '@testing-library/react-native'
import * as redux from 'react-redux'
import shiftSlice from '../../state/shiftSlice'
import moment from 'moment'
import MockDate from 'mockdate'

describe('HandWashComponent', () => {
  let state
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    redux.useSelector = selector => selector(state)
    redux.useDispatch = () => dispatch
    MockDate.set('2018-1-1')
  })

  afterEach(() => {
    MockDate.reset()
  })

  it('renders correctly when off shift', () => {
    state = {
      shifts: [],
    }
    const { baseElement } = render(<ShiftController />)

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correctly when on shift', () => {
    state = {
      shifts: [{ endTime: moment().add(2, 'h') }],
    }
    const { baseElement } = render(<ShiftController />)

    expect(baseElement).toMatchSnapshot()
  })

  it('dispatches `startShift` action when user presses button', async () => {
    state = {
      shifts: [],
    }
    const { baseElement, getByTestId } = render(<ShiftController />)

    const button = getByTestId('shift-button')
    fireEvent.press(button)

    expect(dispatch).toHaveBeenCalledWith(shiftSlice.actions.startShift())

    expect(baseElement).toMatchSnapshot()
  })
})
