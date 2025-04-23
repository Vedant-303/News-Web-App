import React, { useEffect, useState } from "react";
import axios from "axios";
import BigNewsHolder from "./BigNewsHolder";
import SmallNewsHolder from "./SmallNewsHolder";
import Filter from "./Filter";
import Skeleton from "./Skeleton"; // import this new component

const News = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("India");
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_GNEWS_API_KEY;

  const getNews = async () => {
    setLoading(true);
    try {
      const query = `https://gnews.io/api/v4/search?q=${activeCategory}&lang=en&country=in&max=10&apikey=${apiKey}`;
      const response = await axios.get(query);
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, [activeCategory]);

  return (
    <>
      <Filter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="news">
        <div className="leftSection">
          {loading
            ? [1, 2, 3].map((i) => <Skeleton type="small" key={i} />)
            : [0, 1, 2].map((i) => data[i] && <SmallNewsHolder key={i} article={data[i]} />)}
        </div>

        <div className="centerSection">
          {loading
            ? [1, 2, 3, 4].map((i) => <Skeleton type="big" key={i} />)
            : [3, 4, 5, 6].map((i) => data[i] && <BigNewsHolder key={i} article={data[i]} />)}
        </div>

        <div className="rightSection">
          {loading
            ? [1, 2, 3].map((i) => <Skeleton type="small" key={i} />)
            : [7, 8, 9].map((i) => data[i] && <SmallNewsHolder key={i} article={data[i]} />)}
        </div>
      </div>
    </>
  );
};

export default News;
