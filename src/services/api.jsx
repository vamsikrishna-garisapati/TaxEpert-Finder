import axios from 'axios';

const API_URL = 'https://taxexpert-data.glitch.me';

/**
 * Fetch all Chartered Accountants
 * @returns {Promise<Array>} - A promise that resolves to the list of all Chartered Accountants
 */
export const fetchAllAccountants = async () => {
  try {
    const response = await axios.get(`${API_URL}/Accountants`);
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
    const response = await axios.get(`${API_URL}/Accountants`, {
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
 * @param {string} id - The unique identifier of the Chartered Accountant
 * @returns {Promise<Object>} - A promise that resolves to the details of the Chartered Accountant
 */
export const fetchAccountantDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/Accountants/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accountant details:', error);
    throw error;
  }
};