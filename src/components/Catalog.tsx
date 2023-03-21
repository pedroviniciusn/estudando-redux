import { useEffect, useState } from "react";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";

function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map((item) => {
        return (
          <article key={item.id}>
            <strong>{item.title}</strong> {" - "}
            <span>{item.price}</span> {"  "}
            <button type="button">Comprar</button>
          </article>
        );
      })}
    </>
  );
}

export default Catalog;
