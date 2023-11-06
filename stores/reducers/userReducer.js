import { createSlice } from '@reduxjs/toolkit'
import { getProfileApi } from '../../servers/user'

const initialState = {
  user: null,
  userProfile: null
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getUserAction: (state, action) => {
      state.user = action.payload
    },
    removeUserAction: (state, action) => {
      state.user = null
      state.userProfile = null
    },
    getProfile: (state, action) => {
      state.userProfile = action.payload
    },
    setNameProfile: (state, action) => {
      state.userProfile.name = action.payload
    }
  }
})

export const { getUserAction, getProfile, removeUserAction, setNameProfile } = userReducer.actions

export default userReducer.reducer

export const getProfileAction = (accessToken) => {
  return async (dispatch, getState) => {
    const result = await getProfileApi(accessToken)
    const action = getProfile(result.data.content)
    dispatch(action)
  }
}
