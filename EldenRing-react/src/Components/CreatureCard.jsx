
import React from 'react';

const CreatureCard = ({ creature }) => {
  return (
    <div className="creature-card">
      <h2>{creature.name}</h2>
      <p>Type: {creature.type}</p>
        <p>Size: {creature.size}</p>
        <p>Alignment: {creature.alignment}</p>
        <p>Armor Class: {creature.armor_class}</p>
        <p>Hit Points: {creature.hit_points}</p>
    </div>
  );
};

export default CreatureCard;
