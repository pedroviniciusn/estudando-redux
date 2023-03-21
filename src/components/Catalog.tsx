import { useCallback, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import api from "../services/api";
import { addProductsToCart } from '../store/modules/cart/actions';
import { IProduct } from "../store/modules/cart/types";

function Catalog() {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddToProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductsToCart(product));
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map((item) => {
        return (
          <article key={item.id}>
            <strong>{item.title}</strong> {" - "}
            <span>{item.price}</span> {"  "}
            <button type="button" onClick={() => handleAddToProductToCart(item)}>Comprar</button>
          </article>
        );
      })}
    </>
  );
}

export default Catalog;
