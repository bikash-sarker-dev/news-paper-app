import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LatestNews from "../components/Header/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftNavbar from "../components/layout-componets/LeftNavbar";
import RightNavbar from "../components/layout-componets/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="max-w-7xl mx-auto font-poppins">
      <header>
        <Header />
        <section>
          <LatestNews />
        </section>
      </header>
      <nav>
        <Navbar />
      </nav>

      <main className="grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
