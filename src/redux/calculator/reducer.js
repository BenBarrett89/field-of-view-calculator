import initialState from './initialState'
import { reducer as setBlocks } from './setBlocks'
import { reducer as setLens } from './setLens'

const reducers = [
  setBlocks,
  setLens,
]

export default (previousState = initialState, action) =>
  reducers.reduce((state, reducer) => reducer(state, action), previousState)
