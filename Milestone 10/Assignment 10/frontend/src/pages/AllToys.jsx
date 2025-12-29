import React, { useEffect, useState } from "react";
import ToyCard from "../components/PopularToys/ToyCard";

const AllToys = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("/allToys.json")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center my-10">
      <title>All Toys - Kids Toy Store</title>
      <h2 className="text-3xl font-bold text-center my-8">
        Browse Different Toys
      </h2>
      <div className="bg-amber-50 p-5 md:p-10 rounded-xl lg:mx-20">
        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {popular.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
