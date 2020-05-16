import React from 'react'
import HandWash from './HandWash'
import { render } from '@testing-library/react-native'
import * as redux from 'react-redux'

describe('HandWash', () => {
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    redux.useDispatch = () => dispatch
  })

  it('initializes correctly', () => {
    const { baseElement } = render(<HandWash />)

    expect(baseElement).toMatchSnapshot()
  })
})
