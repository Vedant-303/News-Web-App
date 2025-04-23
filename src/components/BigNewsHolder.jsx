import React from "react";

const BigNewsHolder = ({ article }) => {
  return (
    <div className="bigNews">
      <img className="bigNewsImg" src={article.image} alt={article.title} />
      <div className="text">
        <p className="headline">{article.title}</p>
        <p className="content">{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default BigNewsHolder;
