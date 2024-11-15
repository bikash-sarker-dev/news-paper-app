import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCards/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="text-xl font-semibold">Dragon News Home</h2>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
