import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDatasetById } from "../services/datasetService";

const DatasetDetailPage = () => {
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getDatasetDetails = async () => {
      try {
        const data = await fetchDatasetById(id);
        setDataset(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDatasetDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {dataset ? (
        <div>
          <h2>{dataset.name}</h2>
          <p>{dataset.description}</p>
        </div>
      ) : (
        <div>No dataset found</div>
      )}
    </div>
  );
};

export default DatasetDetailPage;
