// lib/store.ts
import { configureStore } from '@reduxjs/toolkit'
import blogSlice from '../slices/blogSlice'
import homeVideoSlice from '../slices/homeVideoSlice'
import CNPLVideoSlice from '../slices/CNPLVideoSlice'
import userSlice from '../slices/userSlice'
import myBookingSlice from '../slices/myBooking'
export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    homeVideo: homeVideoSlice,
    CNPLVideo: CNPLVideoSlice,
    user: userSlice,
    myBookings: myBookingSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
