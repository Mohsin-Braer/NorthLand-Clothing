import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
<<<<<<< HEAD
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
=======
import { fetchCategoriesStart } from '../../store/categories/category.action';
>>>>>>> redux-based-app

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    dispatch(fetchCategoriesAsync());
=======
    dispatch(fetchCategoriesStart());
>>>>>>> redux-based-app
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
