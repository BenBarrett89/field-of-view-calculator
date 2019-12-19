import initialState from './initialState'
import { typeSetBlocks as type } from '../actionTypes'

const action = blocks => ({ type, blocks })

const reducer = (state, action) => action.type === type ? setBlocks({ state, action }) : state

const setBlocks = ({ state, action }) => {
  const blocks = action.blocks
  const fovmm = state.lens.fovmm
  return Object.assign({}, state, {
    blocks,
    result: blocks * fovmm
  })
}

module.exports = {
  action,
  reducer
}
