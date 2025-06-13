import React from "react";
import { FaDownload } from "react-icons/fa";
import aboutImg from "../assets/img.png"; // adjust path if needed

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="text-center mb-10">
        <span className="text-blue-600 text-5xl font-bold">About Me</span>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className=" rounded-full overflow-hidden shadow-2xl border-4 border-teal-200 animate-bounce-slow">
          <img
            src={aboutImg}
            alt="profile"
            className="w-60 h-60 md:w-75 md:h-75 object-cover rounded-full"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-1/2 ml-20 border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">My Introduction</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Hi, I'm Sandesh Stha! I'm passionate about coding, movies, and solving
            challenging problems. Whether it's creating engaging web experiences,
            building innovative projects like my 'Virtual Travel Experience' platform,
            or diving into detailed grammar and math concepts, I always strive for
            excellence. Let's create something amazing together!
          </p>

          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white px-5 py-2 rounded-lg hover:to-teal-500 transition duration-300 font-semibold text-lg shadow hover:shadow-lg">
            <FaDownload />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
