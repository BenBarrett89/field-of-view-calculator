import { combineEpics } from 'redux-observable'

import { calculateEpic } from './calculator/epics'

const epics = combineEpics(
  calculateEpic
)

export default epics