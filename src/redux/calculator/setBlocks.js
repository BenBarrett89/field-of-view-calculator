import initialState from './initialState'
import { typeSetBlocks as type } from '../actionTypes'

import calculation from './resultCalculation'

const action = blocks => ({ type, blocks })

const reducer = (state, action) => action.type === type ? setBlocks({ state, action }) : state

const setBlocks = ({ state, action }) => {
  const blocks = action.blocks
  const valid = blocks >= 0 && blocks <= 250
  const fovmm = state.lens.fovmm
  return Object.assign({}, state, {
    valid,
    blocks,
    result: calculation({ blocks, fovmm })
  })
}

module.exports = {
  action,
  reducer
}
