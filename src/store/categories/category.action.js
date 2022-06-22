import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

<<<<<<< HEAD
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
  
export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
        dispatch(fetchCategoriesStart());

        try {
          const categoriesArray = await getCategoriesAndDocuments('categories');
          dispatch(fetchCategoriesSuccess(categoriesArray));
        } catch(error){
          dispatch(fetchCategoriesFailed(error));
        }
  }
}

=======
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
>>>>>>> redux-based-app
