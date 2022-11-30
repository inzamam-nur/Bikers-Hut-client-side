import React from "react";

const Side = () => {
  return (
    <div>
      <div className="hero lg:h-96 bg-base-200">
        <div className="hero-content  lg:gap-96 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/L9gZCn1/motobike-heavy-1920x1080-bikes-wallpaper-preview.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          ></img>
          <div>
            <h1 className="text-5xl font-bold">Best Resale Bike</h1>
            <p className="py-6">
              We are the best resale bike selling and buying market{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="hero lg:h-96 bg-base-200">
        <div className="hero-content lg:gap-96 flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/HhXfxHZ/biker-4k-8k-hd-wallpaper-preview.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          ></img>
          <div>
            <h1 className="text-5xl font-bold">We prodvide best brands bike</h1>
            <p className="py-6">
           Here you will find the best brands all over the world
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
