/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  remainingTime: 0,
  isRunning: false,
  rest: false,
}

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    recordTime(state, action) {
      state.remainingTime = action.payload
    },
    start(state) {
      state.isRunning = true
    },
    stop(state) {
      state.isRunning = false
    },
    toggleRest(state) {
      state.rest = !state.rest
    },
  },
})

const { reducer } = timerSlice
const { recordTime, start, stop, toggleRest } = timerSlice.actions

export { reducer, recordTime, start, stop, toggleRest }
