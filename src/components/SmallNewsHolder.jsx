import React from "react";

const SmallNewsHolder = ({ article }) => {
  return (
    <div className="smallNews">
      <img className="smallNewsImg" src={article.image} alt={article.title} />
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

export default SmallNewsHolder;
