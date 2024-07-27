"use client"
import React from 'react';
import '@/globals.css'

const Custom = ({ title, description, image, characteristics }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {characteristics.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Custom;