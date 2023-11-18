// src/services/datasetService.js

import { mockDatasets } from "../services/mockData";
export const fetchDatasets = async () => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDatasets);
    }, 1000); // simulate network delay
  });
};

export const fetchDatasetById = async (id) => {
  // Simulate fetching a single dataset by ID
  return new Promise((resolve) => {
    setTimeout(() => {
      const dataset = mockDatasets.find((dataset) => dataset.id === id);
      resolve(dataset);
    }, 1000); // simulate network delay
  });
};
