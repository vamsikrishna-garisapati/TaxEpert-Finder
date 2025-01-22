import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Adjust this based on your JSON server URL

/**
 * Fetch all Chartered Accountants
 * @returns {Promise<Array>} - A promise that resolves to the list of Chartered Accountants
 */
export const fetchAllAccountants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/accountants`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accountants:', error);
    throw error;
  }
};

/**
 * Search Chartered Accountants by name
 * @param {string} query - The search query
 * @returns {Promise<Array>} - A promise that resolves to the list of matching Chartered Accountants
 */
export const searchAccountants = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/accountants`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching accountants:', error);
    throw error;
  }
};

/**
 * Fetch details of a specific Chartered Accountant
 * @param {number} id - The ID of the Chartered Accountant
 * @returns {Promise<Object>} - A promise that resolves to the Chartered Accountant details
 */
export const fetchAccountantDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/accountants/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching accountant details for ID ${id}:`, error);
    throw error;
  }
};
