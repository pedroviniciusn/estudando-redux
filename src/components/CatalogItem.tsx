import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductsToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

function CatalogItem ({product}: CatalogItemProps) {
  const dispatch = useDispatch();

  const handleAddToProductToCart = useCallback(() => {
    dispatch(addProductsToCart(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
    <strong>{product.title}</strong> {" - "}
    <span>{product.price}</span> {"  "}
    <button type="button" onClick={handleAddToProductToCart}>Comprar</button>
  </article>
  )
}

export default CatalogItem;