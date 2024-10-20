import axios from 'axios';

const API_BASE_URL = 'https://monitor-backend-rust.vercel.app/api';

export const getPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pets data:', error);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products data:', error);
  }
};

export const getCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers data:', error);
  }
};
