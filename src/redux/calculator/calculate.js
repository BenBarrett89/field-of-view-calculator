import { typeCalculate as type } from '../actionTypes'

import calculation from './resultCalculation'

const action = () => ({ type })

const reducer = (state, action) => action.type === type ? calculate({ state, action }) : state

const calculate = ({ state, action }) => {
  const blocks = state.blocks
  const fovmm = state.lens ? state.lens.fovmm : 0
  const result = calculation({ blocks, fovmm })
  return Object.assign({}, state, {
    result
  })
}

module.exports = {
  action,
  reducer
}
