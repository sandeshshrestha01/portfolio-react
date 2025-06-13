import React from "react";
import bgimg from "../assets/bg.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100"
      style={{
        background: "",
        minHeight: "100vh",
      }}
    >
      {/* Image */}
      <div className="profile-img mt-10 md:mt-0 flex justify-center items-center order-1 md:order-2">
        <div className="rounded-full overflow-hidden shadow-2xl border-4 border-teal-200 animate-bounce-slow">
          <img
            src={bgimg}
            alt="profile img"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="home-text max-w-xl order-2 md:order-1" style={{ animation: "fadeIn 1.2s" }}>
        <div className="home-text-card mb-4">
          <span className="text-xl text-gray-500">Hi!</span>
          <h1 className="text-4xl font-bold mt-2">
            I'm <strong className="text-blue-700">Sandesh Shrestha</strong>
          </h1>
        </div>

        <div className="home-name mb-6">
          <p className="text-lg">
            I am <span className="typeText text-blue-600 font-semibold">Web Developer</span>
          </p>
          <span className="text-sm uppercase tracking-widest text-gray-400">STUDENT</span>
        </div>

        <div className="home-btn mb-6">
          <button className="btn flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Download CV <FaFileAlt />
          </button>
        </div>

        <div className="social_icons flex gap-4">
          <a href="https://www.facebook.com/sandesh.stha.71404" target="_blank" rel="noopener noreferrer" className="icon" style={{ background: "#fff" }}>
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sandesh-shrestha-2822aa326/" target="_blank" rel="noopener noreferrer" className="icon" style={{ background: "#fff" }}>
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.instagram.com/sandesh_stha2.8/" target="_blank" rel="noopener noreferrer" className="icon" style={{ background: "#fff" }}>
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com/sandeshshrestha01/sandesh" target="_blank" rel="noopener noreferrer" className="icon" style={{ background: "#fff" }}>
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
