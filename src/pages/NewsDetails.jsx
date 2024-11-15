import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import RightNavbar from "../components/layout-componets/RightNavbar";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  console.log(news._id);
  return (
    <div className="max-w-7xl mx-auto font-poppins ">
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2>Dragon News</h2>
          <div className="card bg-base-100  shadow-xl">
            <figure className="px-5 pt-10">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-start space-y-5 ">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn btn-primary"
                >
                  Back to category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
