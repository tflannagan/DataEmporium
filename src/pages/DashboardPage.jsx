// src/pages/DashboardPage.jsx

import { useEffect, useState } from "react";
import { fetchDatasets } from "../services/datasetService";

const DashboardPage = () => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const getDatasets = async () => {
      const data = await fetchDatasets();
      setDatasets(data);
    };

    getDatasets();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {datasets.map((dataset) => (
          <div key={dataset.id}>
            <h2>{dataset.name}</h2>
            <p>{dataset.description}</p>
            <span>{dataset.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
