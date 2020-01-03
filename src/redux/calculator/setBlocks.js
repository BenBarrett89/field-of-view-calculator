import { typeSetBlocks as type } from '../actionTypes'

import { softMaximumBlocks } from '../../config/constants'

const action = blocks => ({ type, blocks })

const reducer = (state, action) => action.type === type ? setBlocks({ state, action }) : state

const setBlocks = ({ state, action }) => {
  const blocks = action.blocks
  const valid = blocks >= 0 && blocks <= softMaximumBlocks
  return Object.assign({}, state, {
    valid,
    blocks,
  })
}

module.exports = {
  action,
  reducer,
}
