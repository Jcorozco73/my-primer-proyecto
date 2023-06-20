/* import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';

const ItemDetailsContainer = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`./productos.json{match.params.id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [match.params.id]);

  return (
    <div>
      {product ? (
        <ItemDetails product={product} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailsContainer; */



