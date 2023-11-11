import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container px-6 m-auto text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                      Welcome to TravelGo
                      </h2>
                      <p className="mt-6 text-gray-600">
                           Your premier travel consultancy. 
                            We specialize in crafting seamless journeys and managing accommodations for 
                            a worry-free experience. With a commitment to excellence, 
                            we transform your travel aspirations into reality. 
                            Our expert team ensures personalized solutions,
                            making TravelGo your trusted partner for unforgettable adventures. 
                            Explore confidently with us, knowing every detail is meticulously taken care of.
                             Your dream vacation awaits—let TravelGo make it extraordinary.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Explore the world with confidence, 
                      knowing that every detail is meticulously taken care of by the experts at TravelGo.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}