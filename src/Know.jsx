import React from "react";
import Header from "./Header";
import Foot from "./Foot";

function Know() {
  return (
    <>
      <Header />
      <section
        className="relative bg-cover bg-center h-[50vh] "
        style={{
          backgroundImage: "url(public/pexels-tomfisk-1595104.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white px-6  ">
        <h1 className="text-4xl font-bold leading-none text-center text-green-200 font-sayan-font">
            About Us
          </h1>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 my-8">
          <h1 className="text-4xl font-bold leading-none text-center font-sayan-font text-green-700">
            About us
          </h1>
        </div>
        <div className="container mx-auto items-center justify-center grid grid-cols-1 gap-8 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0 justify-center shadow-lg p-10 rounded-xl h-5/6">
            <h1 className="text-3xl font-bold leading-none text-center font-sayan-font text-green-700 my-5">
              Our Mission
            </h1>
            <div className="relative text-center">
              <p className="px-6 py-1 font-sayan-font">
                At CropPredict, our mission is to empower farmers and
                agricultural businesses with cutting-edge technology that
                enhances crop management and maximizes yields. We strive to
                provide accurate, real-time predictions that help you make
                informed decisions, ensuring sustainability and profitability in
                agriculture.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-12 lg:mx-0 justify-center shadow-lg p-10 rounded-xl h-5/6">
            <h1 className="text-3xl font-bold leading-none text-center text-green-700 my-5 font-sayan-font">
              Who We Are
            </h1>
            <div className="relative text-center">
              <p className="px-6 py-1 font-sayan-font">
                CropPredict is a team of dedicated agronomists, data scientists,
                and technology enthusiasts committed to revolutionizing the
                agricultural industry. With years of experience and a passion
                for innovation, we combine our expertise to create solutions
                that address the unique challenges faced by modern farmers.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-12 lg:mx-0 justify-center shadow-lg p-10 rounded-xl h-5/6">
            <h1 className="text-3xl font-bold leading-none text-center text-green-700 my-5 font-sayan-font">
              Who We Do
            </h1>
            <div className="relative text-center">
              <p className="px-6 py-1 font-sayan-font">
                We utilize advanced machine learning algorithms, satellite
                imagery, and weather data to deliver precise crop predictions.
                Our platform offers insights into optimal planting times, pest
                and disease forecasts, and yield projections. By leveraging the
                power of data, we help farmers optimize their resources, reduce
                risks, and enhance productivity.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-12 lg:mx-0 justify-center shadow-lg p-10 rounded-xl h-5/6">
            <h1 className="text-3xl font-bold leading-none text-center text-green-700 my-5 font-sayan-font">
              Our Commitment
            </h1>
            <div className="relative text-center">
              <p className="px-6 py-1 font-sayan-font">
                We are dedicated to supporting the agricultural community by
                providing reliable and accessible tools. Our commitment extends
                beyond technology; we offer educational resources, personalized
                support, and continuous updates to ensure our users stay ahead
                in the ever-evolving field of agriculture. At CropPredict, we
                believe in the future of farming, driven by data and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h1 className=" mb-16 text-4xl font-bold leading-none text-center text-green-700 font-sayan-font">
              Our Team Members
            </h1>

            <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="public/WhatsApp Image 2024-05-26 at 13.59.36_9b02ec9e.jpg"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-1000 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center opacity-60">
                  <span class="text-lg font-bold text-black font-sayan-font">
                    Sayan Sarkar
                  </span>
                  <span class=" text-black font-sayan-font">B.Tech C.S.E</span>
                </div>
              </div>

              <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="public/ad.jpg"
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-1000 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center opacity-60">
                  <span class="text-lg font-bold text-black font-sayan-font">
                    Abir Das
                  </span>
                  <span class=" text-black font-sayan-font">B.Tech C.S.E</span>
                </div>
              </div>

              <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="public/spriha roy.jpg"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-1000 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center opacity-60">
                  <span class="text-lg font-bold text-black font-sayan-font">
                    Spriha Roy
                  </span>
                  <span class=" text-black font-sayan-font">B.Tech C.S.E</span>
                </div>
              </div>

              <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="public/sudipto.jpg"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-1000 group-hover:scale-110"
                />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center opacity-60">
                  <span class="text-lg font-bold text-black font-sayan-font">
                    Sudipto dey
                  </span>
                  <span class=" text-black font-sayan-font">B.Tech C.S.E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Foot />
    </>
  );
}

export default Know;
