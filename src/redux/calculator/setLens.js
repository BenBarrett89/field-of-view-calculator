import initialState from './initialState'
import { typeSetLens as type } from '../actionTypes'

const action = lens => ({ type, lens })

const reducer = (state, action) => action.type === type ? setLens({ state, action }) : state

const setLens = ({ state, action }) => {
  const blocks = state.blocks
  const lens = action.lens
  const fovmm = lens.fovmm
  return Object.assign({}, state, {
    lens,
    result: blocks * fovmm
  })
}

module.exports = {
  action,
  reducer
}
