// src/services/api.js
const API_URL = 'https://eldenring.fanapis.com/api';

export const fetchCreatures = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/creatures?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des créatures');
    }
    const data = await response.json();
    return data.creatures;
  } catch (error) {
    throw error;
  }
};
