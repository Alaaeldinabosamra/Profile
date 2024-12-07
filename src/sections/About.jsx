import React from "react";
import {
  aboutInfo,
  journeyInfo,
  skillsInfo,
  moreInfo,
} from "../constants/index"; // Import the constants

const About = () => {
  return (
    <section className="relative" id="about">
      <div className="bg-black-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-white-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-blue-700 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {aboutInfo.name}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              {aboutInfo.description}
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-white-600">
                  {journeyInfo.heading}
                </h3>
                <p className="mt-4 text-lg text-gray-400">
                  {journeyInfo.description}
                </p>
                <img src="" alt="" className="p-2 rounded-lg w-52 mt-4" />
              </div>
              <div className="border border-blue-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-blue-300">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  {skillsInfo.map((skill, index) => (
                    <div
                      key={index}
                      className="border border-blue-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-10" />
                      <span className="font-semibold text-white-700">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-white-600">
              {moreInfo.title}
            </h3>
            <p className="mt-4 text-lg text-gray-400">{moreInfo.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
