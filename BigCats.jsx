import React, { useState } from 'react';
import SingleCat from './SingleCat';

const catsData = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  const [cats, setCats] = useState(catsData);

  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverse = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const handleFilterPanthera = () => {
    const pantheraCats = catsData.filter((cat) => cat.latinName.includes('Panthera'));
    setCats(pantheraCats);
  };

  const handleReset = () => {
    setCats(catsData);
  };

  return (
    <div>
      <h1>Big Cats</h1>
      <div>
        <button onClick={handleSort}>Sort Alphabetically</button>
        <button onClick={handleReverse}>Reverse List</button>
        <button onClick={handleFilterPanthera}>Filter Panthera Family</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cats.map((cat) => (
          <SingleCat key={cat.id} id={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} />
        ))}
      </div>
    </div>
  );
};

export default BigCats;
