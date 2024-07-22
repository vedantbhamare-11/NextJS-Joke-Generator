import axios from 'axios';

const BASE_URL = 'https://official-joke-api.appspot.com';

export const getRandomJoke = async () => {
  const response = await axios.get(`${BASE_URL}/random_joke`);
  return response.data;
};