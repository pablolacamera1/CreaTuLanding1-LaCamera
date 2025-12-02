import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {


  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getProductById(Number(id)).then((res: any) => {
        setProduct(res);
      });
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
