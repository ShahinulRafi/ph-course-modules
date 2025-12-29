import React from "react";

const Marketing = () => {
  return (
    <div className="p-10 text-center bg-gray-100">
      <h1 className="text-3xl font-semibold">
        Trusted By Millions, Built For You
      </h1>

      <div className="mt-5 md:flex md:justify-center gap-20 md:gap-40">
        <div className="md:mt-0 mt-10">
          <div>Total Downloads</div>
          <div className="mt-2 text-5xl font-bold">29.6M</div>
          <div className="mt-2">21% More Than Last Month</div>
        </div>

        <div className="md:mt-0 mt-10">
          <div className="">Total Downloads</div>
          <div className="mt-2 text-5xl font-bold">29.6M</div>
          <div className="mt-2">21% More Than Last Month</div>
        </div>

        <div className="md:mt-0 mt-10">
          <div>Total Downloads</div>
          <div className="mt-2 text-5xl font-bold">29.6M</div>
          <div className="mt-2">21% More Than Last Month</div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
