import React, { useState } from 'react';

const Filter = ({ activeCategory, setActiveCategory }) => {
  const categories = ["India", "World", "Technology", "Business", "Sports", "Politics", "Weather"];

  const handleClick = (category) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };

  return (
    <div className='filter'>
      {categories.map((category) => (
        <p
          key={category}
          onClick={() => handleClick(category)}
          className={activeCategory === category ? "active" : ""}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Filter;