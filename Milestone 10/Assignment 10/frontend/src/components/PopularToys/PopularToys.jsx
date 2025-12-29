import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { Link } from "react-router";

const PopularToys = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  return (
    <div className="my-10 bg-amber-50 md:bg-none flex flex-col items-center">
      <div className="md:bg-amber-50 md:mx-20 rounded-xl md:p-10 py-10">
        <h2 className="text-3xl font-semibold text-center mt-8">
          Popular Toys
        </h2>
        <p className=" text-center mb-8 mt-2 text-gray-600">
          Check out our popular toys!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {popular.map((toy) => (
            <ToyCard key={popular.toyId} toy={toy}></ToyCard>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link className="text-center items-center" to="/alltoys">
            <button className="btn btn-secondary">All Toys</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
