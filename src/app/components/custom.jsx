import React from 'react';

const Custom = ({ title, description, image, features }) => {
  return (
    <div className="custom-component">
      <h1>{title}</h1>
      <p>{description}</p>
      {image && <img src={image} alt="Custom" />}
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <strong>{feature.label}: </strong>
            <span>{feature.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Custom;