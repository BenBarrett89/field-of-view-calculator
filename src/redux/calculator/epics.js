import { filter, mapTo } from 'rxjs/operators'

import {
  typeCalculate,
  typeSetBlocks,
  typeSetLens
} from '../actionTypes'

import { action as calculate } from './calculate'

const calculateEpic = action$ => action$
  .pipe(
    filter(action => action.type === typeSetBlocks || action.type === typeSetLens),
    mapTo(calculate())
  )

module.exports = {
  calculateEpic,
}