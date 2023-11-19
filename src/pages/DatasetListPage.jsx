import { useContext, useEffect, useState } from "react";
import { fetchDatasets } from "../services/datasetService";
import { CartContext } from "../context/CartContext";

const DatasetListPage = () => {
  const [datasets, setDatasets] = useState([]);
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    const getDatasets = async () => {
      const data = await fetchDatasets();
      setDatasets(data);
    };

    getDatasets();
  }, []);

  const isInCart = (datasetId) =>
    cartItems.some((item) => item.id === datasetId);

  return (
    <div className="dataset-list-page">
      <h1>Datasets</h1>
      {datasets.map((dataset) => (
        <div key={dataset.id}>
          <h2>{dataset.name}</h2>
          <p>{dataset.description}</p>
          <p>${dataset.price}</p>
          {isInCart(dataset.id) ? (
            <button onClick={() => removeFromCart(dataset.id)}>
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addToCart(dataset)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DatasetListPage;
