import React from "react";
import { Link } from "react-router";

const Slider = () => {
  return (
    <div className="flex flex-col m-10 items-center justify-between mx-auto">
      <div className="">
        <h2 className="mx-10 text-3xl font-semibold text-center">
          Welcome to RentWheels!
        </h2>
        <p className="mx-10 text-gray-600">Let it be your child, or your inner child, get the best feeling of buying toys!</p>
         <div className="flex justify-center m-10">
    <button className="btn btn-secondary"><Link to="/alltoys">Browse Toys</Link></button>
  </div>
      </div>
      <div className="md:mx-20 mx-10">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Burger"
              className="w-80 h-110"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1596068587619-e4b11c7a3488?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1543878636-41918458581d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              className="w-80 h-110"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
