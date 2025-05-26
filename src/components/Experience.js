"use client"

import { experience } from '../constants/experience';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-gray-500 p-2">
          Work <span>Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-600">{exp.role}</h3>
                <span className="text-gray-500">{exp.duration}</span>
              </div>
              
              <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div>
                <h5 className="font-medium mb-2">Key Achievements:</h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;