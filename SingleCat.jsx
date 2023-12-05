import React from 'react';

const SingleCat = ({ id, name, latinName, image }) => {
  return (
    <div key={id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
      <h3>{name}</h3>
      <p>{latinName}</p>
    </div>
  );
};

export default SingleCat;
