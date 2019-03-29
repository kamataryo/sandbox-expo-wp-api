import update from 'immutability-helper'

const SET_USERNAME = 'login.setUsername'
const SET_PASSWORD = 'login.setPassword'
const REQUEST_TOKEN = 'login.requestToken' // has Effect
const SET_TOKEN = 'login.setAccessToken'

export const initialState = {
  token: '',
  username: '',
  password: ''
}

export const ACTIONS = {
  SET_USERNAME,
  SET_PASSWORD,
  REQUEST_TOKEN,
  SET_TOKEN
}

export const createActions = {
  setUsername: username => ({ type: SET_USERNAME, payload: { username } }),
  setPassword: password => ({ type: SET_PASSWORD, payload: { password } }),
  requestToken: () => ({ type: REQUEST_TOKEN, payload: {} }),
  setToken: token => ({ type: SET_TOKEN, payload: { token } })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USERNAME: {
    return update(state, { token: { $set: action.payload.username } })
  }
  case SET_PASSWORD: {
    return update(state, { password: { $set: action.payload.password } })
  }
  case SET_TOKEN: {
    return update(state, { token: { $set: action.payload.token } })
  }
  default: {
    return state
  }
  }
}

export default reducer
