import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state: any, action: PayloadAction<any>) => {
      return action.payload
    },
    removeUser: () => {
      return null
    },
  },
})

export default userSlice.reducer
export const { addUser, removeUser } = userSlice.actions
