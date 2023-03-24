import { createAction } from '../../utils/reducer/reducer.utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export const setCategoriesMap = (categoreisMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGOREIS_MAP, categoreisMap)
