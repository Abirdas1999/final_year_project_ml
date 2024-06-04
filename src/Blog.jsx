import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-20 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold  text-green-700 font-sayan-font">
              Blog
            </h2>
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
              </div>
            </article>
          </div>
          <div className="text-center py-8">
            <Link
              to="/blog1"
              className="mt-6 bg-green-600 text-white px-6 py-4 rounded  hover:bg-green-500 font-semibold font-sayan-font"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
