import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
const shiftSlice = createSlice({
  name: 'shifts',
  initialState: [],
  reducers: {
    startShift: state => [
      ...state,
      {
        endTime: moment()
          .add(8, 'h')
          .valueOf(),
      },
    ],
  },
})

export default shiftSlice
