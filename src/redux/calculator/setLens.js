import { typeSetLens as type } from '../actionTypes'

const action = lens => ({ type, lens })

const reducer = (state, action) => action.type === type ? setLens({ state, action }) : state

const setLens = ({ state, action }) => {
  const lens = action.lens
  return Object.assign({}, state, {
    lens
  })
}

module.exports = {
  action,
  reducer,
}
