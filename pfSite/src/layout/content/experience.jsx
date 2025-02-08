// import React from "react";
import './experience.css';
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer Consultant",
      company: "MCB Group, Mauritius",
      duration: "June 2024 - Present",
      description: [
        "Developed and maintained software applications for MCB Group, a leading financial institution in Mauritius.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Utilized Agile methodologies to ensure timely delivery of software projects.",
        "Refactored and optimized existing codebase to improve software performance and security.",
      ],
    },
    {
      title: "Angular .NET Software Developer",
      company: "ClearStar - The Jitu, Alpharetta, GA",
      duration: "December 2023 - May 2024",
      description: [
        "Collaborated with cross-functional teams on Azure DevOps to deliver dependable background check solutions.",
        "Proficient in C programming, demonstrating expertise in crafting high-performance solutions.",
      ],
    },
    {
        title: "Angular .NET Software Developer",
        company: "ClearStar - The Jitu, Alpharetta, GA",
        duration: "December 2023 - May 2024",
        description: [
          "Collaborated with cross-functional teams on Azure DevOps to deliver dependable background check solutions.",
          "Proficient in C programming, demonstrating expertise in crafting high-performance solutions.",
        ],
      },
      {
        title: "Angular .NET Software Developer",
        company: "ClearStar - The Jitu, Alpharetta, GA",
        duration: "December 2023 - May 2024",
        description: [
          "Collaborated with cross-functional teams on Azure DevOps to deliver dependable background check solutions.",
          "Proficient in C programming, demonstrating expertise in crafting high-performance solutions.",
        ],
      },

      {
        title: "Angular .NET Software Developer",
        company: "ClearStar - The Jitu, Alpharetta, GA",
        duration: "December 2023 - May 2024",
        description: [
          "Collaborated with cross-functional teams on Azure DevOps to deliver dependable background check solutions.",
          "Proficient in C programming, demonstrating expertise in crafting high-performance solutions.",
        ],
      },
  ];

  return (
    <div className=" mt-1 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        My Work Experience
      </h2>
      <p className="text-lg text-center text-gray-400 mb-12">
        I&apos;ve worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here&apos;s the rundown:
      </p>
      <div className="relative max-w-4xl mx-auto">
        <div className="border-l-2 border-gray-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={` width-45 w-[45%] bg-gray-800 shadow-lg rounded-lg p-6 relative ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-400 italic">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <span
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#AC4746] rounded-full ${
                  index % 2 === 0 ? "-right-2" : "-left-2"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
