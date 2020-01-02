import { typeSetBlocks as type } from '../actionTypes'

const action = blocks => ({ type, blocks })

const reducer = (state, action) => action.type === type ? setBlocks({ state, action }) : state

const setBlocks = ({ state, action }) => {
  const blocks = action.blocks
  const valid = blocks >= 0 && blocks <= 250
  return Object.assign({}, state, {
    valid,
    blocks,
  })
}

module.exports = {
  action,
  reducer
}
