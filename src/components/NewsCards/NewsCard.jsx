import React from "react";
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const {
    _id,
    author,
    details,
    image_url,
    title,
    thumbnail_url,
    total_view,
    rating,
    published_date,
  } = singleNews;
  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={author.img}
          alt="author"
        />
        <div className="ml-3">
          <p className="text-white font-semibold text-sm">{author.name}</p>
          <p className="text-gray-300 text-xs">{author.published_date}</p>
        </div>
      </div>
      <img
        className="w-full h-48 object-cover"
        src={image_url}
        alt="thumbnail"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{details}</p>
        <Link to={`/news/${_id}`} className="mt-4 text-blue-500 font-semibold">
          Read More
        </Link>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-gray-600">
            <AiOutlineStar className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm">{rating.number}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <AiOutlineEye className="h-5 w-5" />
            <span className="ml-1 text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
