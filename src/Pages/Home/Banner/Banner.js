import React from 'react';

const Banner = () => {
    return (
        <div >
            <div className="hero from-black bg-black  " style={{ backgroundImage: `url("https://i.ibb.co/TYyK5HL/wp4005566.jpg")`,height:'600px' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white bg-black p-5 bg-opacity-80	 ">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Bikers Hut</h1>
      <p className="mb-5">The Biggest Online Bike Resale Market</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;