import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Foot from "./Foot";

function Blog1() {
  return (
    <>
      <Header />
      <section
        className="relative bg-cover bg-center h-[50vh] "
        style={{
          backgroundImage: "url(public/pix4.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white px-6  ">
        <h1 className="text-4xl font-bold leading-none text-center text-green-200 font-sayan-font">
            Our Blogs
          </h1>
        </div>
      </section>
      <div className="container p-20 mx-auto space-y-8">
        <div className="container">
        <h1 className="text-4xl font-bold leading-none text-emerald-700 font-sayan-font">
            Our tranding Blogs
          </h1>
          <p className="text-sm  text-black-700 font-sayan-font py-7">
Discover how advanced technology and data analytics are revolutionizing agriculture. Explore the latest trends in crop prediction and their potential to enhance food security and sustainability.
Big data and artificial intelligence are transforming the agricultural landscape. By analyzing vast amounts of data from weather patterns, soil health, and crop performance, these technologies provide farmers with precise predictions and actionable insights. This helps optimize planting schedules, irrigation, and harvesting, leading to increased yields and reduced waste.</p>
        </div>
      
        
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src="public/photo1.jpg"
            />
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Crop Rotation: A Key to Sustainable Agriculture
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="public/photo2.webp"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Embracing Technology for Efficient Crop Management
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs2"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="public/photo3.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Climate Change and Its Effects on Crop Production
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs3"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="public/photo4.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                The Rise of Organic Farming in Sustainable Agriculture
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs4"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500"
              src="public/photo5.webp"
            />
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Farming Futures: Predictive Analytics for Agricultural
                Productivity
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs5"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="public/photo6.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Optimizing Farming Practices
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs6"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="public/photo7.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Enhancing Agricultural Productivity
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs7"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50 shadow-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src="public/photo8.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>

              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug font-sayan-font">
                Predictive Modeling for Crop Yield Forecasting
              </h3>
              <Link
                rel="noopener noreferrer"
                to="/blogs8"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 font-sayan-font"
              >
                Read More
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default Blog1;
