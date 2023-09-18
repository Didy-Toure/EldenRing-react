
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CreatureCard from './CreatureCard';
import { fetchCreatures } from '../service/api';

const CreatureList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const limit = parseInt(queryParams.get('limit')) || 5;

  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    fetchCreatures(limit)
      .then((data) => setCreatures(data))
      .catch((error) => console.error('Erreur:', error));
  }, [limit]);

  return (
    <div>
      <h1>Liste des Créatures d'Elden Ring</h1>
      <Link to={`/?limit=${limit + 5}`}>Afficher 5 de plus</Link>
      <div className="creature-list">
        {creatures.map((creature) => (
          <CreatureCard key={creature.id} creature={creature} />
        ))}
      </div>
    </div>
  );
};

export default CreatureList;
