import { useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";
import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";

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
        return <CatalogItem key={item.id} product={item} />;
      })}
    </>
  );
}

export default Catalog;
