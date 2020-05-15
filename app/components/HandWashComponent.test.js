import React from 'react'
import HandWashComponent from './HandWashComponent'
import { fireEvent, render, act, wait } from '@testing-library/react-native'
jest.useFakeTimers()
describe('HandWashComponent', () => {
  it('initializes correctly', () => {
    const { baseElement } = render(<HandWashComponent />)

    expect(baseElement).toMatchSnapshot()
  })

  it('starts the timer when button is pressed and shows elapsed time when finished', async () => {
    const { baseElement, getByTestId, getByText } = render(
      <HandWashComponent />
    )

    const button = getByTestId('timer-button')
    fireEvent.press(button)

    act(() => jest.runAllTimers())

    await wait(() => expect(getByText('20')).toBeTruthy())

    expect(baseElement).toMatchSnapshot()
  })
})
