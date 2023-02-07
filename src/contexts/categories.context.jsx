import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setcategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const getCategory = await getCategoriesAndDocuments();
      setcategories(getCategory)
    };
    
    getCategoriesMap();
  }, []);

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
