import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { selectCategories } from '../../store/category/category.selector';

import './category.styles.scss';

const Category = () => {
  const categories = useSelector(selectCategories);
  const { category } = useParams();
  console.log('render category')
  const [products, setProducts] = useState(categories[category]);


  useEffect(() => {
    console.log('effect fired calling setproducts')
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
