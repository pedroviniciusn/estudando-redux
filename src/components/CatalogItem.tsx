import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IState } from '../store';
import { addProductsToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

function CatalogItem ({product}: CatalogItemProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddToProductToCart = useCallback(() => {
    dispatch(addProductsToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
    <strong>{product.title}</strong> {" - "}
    <span>{product.price}</span> {"  "}
    <button type="button" onClick={handleAddToProductToCart}>Comprar</button>
    
    {hasFailedStockCheck && <span style={{color: "red"}}>Falta de estoque</span>}
  </article>
  )
}

export default CatalogItem;