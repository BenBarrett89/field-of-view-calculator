import { typeCalculate as type } from '../actionTypes'

import calculation from './resultCalculation'

const action = () => ({ type })

const reducer = (state, action) => action.type === type ? calculate({ state, action }) : state

const calculate = ({ state, action }) => {
  const blocks = state.blocks
  const fovmm = state.lens.fovmm
  const result = calculation({ blocks, fovmm })

  const error = isNaN(result) || result < 0

  return Object.assign({}, state, {
    error,
    result,
  })
}

module.exports = {
  action,
  reducer,
}
