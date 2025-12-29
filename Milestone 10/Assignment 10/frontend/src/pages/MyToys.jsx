import React from "react";
import ToyCard from "../components/PopularToys/ToyCard";

const MyToys = () => {
  const demoToys = [
    {
      toyId: 1,
      toyName: "Rainbow Blocks",
      sellerName: "Demo Store",
      price: 19.99,
      rating: 4.2,
      availableQuantity: 50,
      description: "Colorful building blocks to boost creativity.",
      pictureURL: "https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg",
      subCategory: "Building Blocks",
    },
    {
      toyId: 2,
      toyName: "Cuddly Bunny",
      sellerName: "Demo Store",
      price: 14.5,
      rating: 4.5,
      availableQuantity: 30,
      description: "Soft plush bunny for cozy hugs.",
      pictureURL: "https://media.istockphoto.com/id/167154546/photo/cute-teddy-bear-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=ecZbvDgOAg4T624CWRcgHxoOcTJ3IL8nia_vGBcWpjc=",
      subCategory: "Soft Toys",
    },
    {
      toyId: 3,
      toyName: "Mini Train Set",
      sellerName: "Demo Store",
      price: 29.99,
      rating: 4.6,
      availableQuantity: 20,
      description: "Fun compact train for little engineers.",
      pictureURL: "https://img.freepik.com/free-vector/wood-toy-train_24877-81937.jpg?t=st=1761380216~exp=1761383816~hmac=5cf9eced61ee096a06ff8546fc60189a529fc5f0dc4ea9d9cc69262d592dfb02&w=1480",
      subCategory: "Vehicles & Trains",
    },
    {
      toyId: 4,
      toyName: "Creative Play-Doh",
      sellerName: "Demo Store",
      price: 9.99,
      rating: 4.1,
      availableQuantity: 60,
      description: "Mold and shape colorful Play-Doh for endless fun.",
      pictureURL: "https://images.pexels.com/photos/20021300/pexels-photo-20021300.jpeg",
      subCategory: "Creative Toys",
    },
    {
      toyId: 5,
      toyName: "Demo Dollhouse",
      sellerName: "Demo Store",
      price: 49.99,
      rating: 4.7,
      availableQuantity: 15,
      description: "Tiny dollhouse with furniture for storytelling play.",
      pictureURL: "https://images.pexels.com/photos/46178/teddy-bear-bear-children-toys-forest-46178.jpeg",
      subCategory: "Dolls & Accessories",
    },
  ];

  return (
    <div className="flex flex-col items-center my-10 md:mx-20">
        <title>My Toys</title>
      <h2 className="text-3xl font-bold text-center my-8">My Toys</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:px-10 justify-items-center">
        {demoToys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default MyToys;
