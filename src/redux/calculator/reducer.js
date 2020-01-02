import initialState from './initialState'
import { reducer as calculate } from './calculate'
import { reducer as setBlocks } from './setBlocks'
import { reducer as setLens } from './setLens'

const reducers = [
  calculate,
  setBlocks,
  setLens,
]

export default (previousState = initialState, action) =>
  reducers.reduce((state, reducer) => reducer(state, action), previousState)
