import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategories } from '../../store/category/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import CategoriesPreview from '../categories-preview/categories-preview.pages';
import Category from '../category/category.page';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const getCategory = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(getCategory));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
