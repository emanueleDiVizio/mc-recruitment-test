import { createSlice } from '@reduxjs/toolkit'

const shiftSlice = createSlice({
  name: 'shift',
  initialState: { onShift: false },
  reducers: {
    startShift: state => ({
      ...state,
      onShift: true,
    }),
    endShift: state => ({
      ...state,
      onShift: false,
    }),
  },
})

export default shiftSlice
