// src/services/datasetService.js

import { mockDatasets } from "../services/mockData";
export const fetchDatasets = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDatasets);
    }, 1000);
  });
};

export const fetchDatasetById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dataset = mockDatasets.find((dataset) => dataset.id === id);
      resolve(dataset);
    }, 1000);
  });
};
