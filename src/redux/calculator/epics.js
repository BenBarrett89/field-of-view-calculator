import { ofType } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

import {
  typeCalculate,
  typeSetBlocks,
  typeSetLens
} from '../actionTypes'

import { action as calculate } from './calculate'

const calculateEpic = action$ => action$
  .pipe(
    ofType(typeSetBlocks, typeSetLens),
    mapTo(calculate())
  )

module.exports = {
  calculateEpic,
}