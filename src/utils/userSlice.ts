import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    addUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = null
    },
    loggedIn: (state) => {
      state.isLoggedIn = true
    },
  },
})

export default userSlice.reducer
export const { addUser, removeUser, loggedIn } = userSlice.actions
