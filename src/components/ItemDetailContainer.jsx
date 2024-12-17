import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import Loader from "./Loader";
import { message } from "antd";
import ProductNotFound from "./ProductNotFound";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [invalidProduct, setInvalidProduct] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionProd = collection(db, "products");

    const docRef = doc(collectionProd, id);

    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          setInvalidProduct(true);
        }
      })
      .catch((error) => message.error(error))
      .finally(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (invalidProduct) {
    return <ProductNotFound />;
  }

  return (
    <div style={{ backgroundColor: "#000" }}>
      {loading ? <Loader /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
