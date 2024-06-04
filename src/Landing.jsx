import React from "react";
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import Foot from "./Foot";
import Header from "./Header";
import BgVideo from './assets/Video2.mp4';

function Landing() {
  return (
    <>
      <Header />
      <main className="flex-grow relative">
  <div className="relative">
    <video
      className="object-cover  h-screen w-full"
      src={BgVideo}
      autoPlay
      loop
      muted
    />
    <div className="absolute inset-0 z-50 flex flex-col  items-start justify-center px-40">
      <h1 className="text-4xl font-extrabold font-sayan-font  text-neutral-700">
        Agriculture & Eco Farming
      </h1>
      <p className="mt-4 max-w-md font-sayan-font">
      Planting Success, Harvesting Confidence: Your Farming Fortunetelle
      </p>
      <Link
        to="/crop"
        className="mt-6 bg-green-600 text-white px-6 py-4 rounded hover:bg-green-500 font-semibold font-sayan-font"
      >
        Predict Your Crops
      </Link>
    </div>
  </div>
</main>

      <Aboutus />
      <Blog />
      <Foot />
    </>
  );
}

export default Landing;
