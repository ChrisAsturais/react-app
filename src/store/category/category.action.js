import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategories = (category) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, category);