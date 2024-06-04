import React from "react";

function Aboutus() {
  return (
    <>
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-bold leading-none text-center text-green-700 font-sayan-font">
            About us
          </h1>
        </div>
        <div className="container mx-auto items-center justify-center grid grid-cols-1 gap-8 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0 justify-center shadow-lg p-10 rounded-xl h-5/6">
            <h1 className="text-3xl font-bold leading-none text-center text-green-700 my-5 font-sayan-font">
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
    </>
  );
}

export default Aboutus;
