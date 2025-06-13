import React from "react";
import { FaBookOpen } from "react-icons/fa"; // replaces 'uil uil-book-open'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-blue-600 text-5xl font-bold mt-2 mb-5">Education</span>
      </div>

      {/* Education Cards Container */}
      <div className="max-w-4xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="bg-white p-6 border-2 border-blue-500 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
          <FaBookOpen className="text-blue-600 text-3xl mb-2 " />
          <span className="text-sm text-gray-500">2024</span>
          <h3 className="text-xl font-semibold text-gray-800 mt-1">
            Higher Secondary Education
          </h3>
          <span className="block text-gray-600 mb-1">
            BROOKLYN ACADEMY SECONDARY SCHOOL
          </span>
          <p className="text-gray-700">G.P.A: 3.36</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 border-2 border-blue-500 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
          <FaBookOpen className="text-blue-600 text-3xl mb-2" />
          <span className="text-sm text-gray-500">2022</span>
          <h3 className="text-xl font-semibold text-gray-800 mt-1">
            Secondary Education
          </h3>
          <span className="block text-gray-600 mb-1">
            Sagarmatha English Boarding School
          </span>
          <p className="text-gray-700">G.P.A: 3.10</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
