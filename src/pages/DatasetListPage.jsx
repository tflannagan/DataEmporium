import { useContext, useEffect, useState } from "react";
import { fetchDatasets } from "../services/datasetService";
import { CartContext } from "../context/CartContext";
import "../assets/styles/DatasetListPage.scss";
import Pagination from "../components/Pagination";
const DatasetListPage = () => {
  const [datasets, setDatasets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Adjust the number of items per page as needed

  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    const getDatasets = async () => {
      const data = await fetchDatasets();
      setDatasets(data);
    };

    getDatasets();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datasets.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isInCart = (datasetId) =>
    cartItems.some((item) => item.id === datasetId);

  return (
    <div className="dataset-list-container">
      <h1>Datasets</h1>
      <div className="dataset-cards">
        {currentItems.map((dataset) => (
          <div key={dataset.id} className="dataset-card">
            <h2>{dataset.name}</h2>
            <p>Topic: {dataset.description}</p>
            <p>Price: ${dataset.price}</p>
            <button
              onClick={() =>
                isInCart(dataset.id)
                  ? removeFromCart(dataset.id)
                  : addToCart(dataset)
              }
            >
              {isInCart(dataset.id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={datasets.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
export default DatasetListPage;
