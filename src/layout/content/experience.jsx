
import './experience.css';
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Angular/ .Net Software Engineer",
      company: "PRISM - Griffin Global Technologies, Hopkinton, MA",
      duration: "May 2024 - Present",
      description: [
        "Write modern, performant, and robust code for a diverse array of client projects.",
        "Incorporated logic into the application to guarantee it adheres to business requirements and functions as expected.",
        "Angular Testing: Implemented and conducted tests on Angular components to ensure robust and reliable software.",
        "Collaborated with cross-functional teams on Azure DevOps to deliver azure functions meant to deliver background process solutions.",
        "Experienced in Microsoft SQL Server, for effective database management and optimization.",
        "Utilized Agile methodologies to ensure timely delivery of work.",
        "Tech Stack and tools: Angular,Jest, Snowflake, Graph-QL, Docker, .Net, Azure Functions, Azure DevOps, Microsoft SQL Server, HTML, CSS, JavaScript, TypeScript,Jira, and Git.",

      ],
    },
    {
      title: "Next js/.Net Software Engineer",
      company: "EMS - Griffin Global Technologies, Nyeri, Kenya",
      duration: "April 2024 - May 2024",
      description: [
        "Collaborated with cross-functional teams to continue developing the internal tool EMS as well as prepare it for intergration with other core internal tools.",
        "Utilized Agile methodologies to ensure timely delivery of work.",
        "Refactored and optimized existing codebase to improve software performance and security.",
        "Experienced in Microsoft SQL Server, for effective database management and optimization.",
        "Tech Stack and tools: Next Js, Prime React, Docker, .Net, Azure Functions, Azure DevOps, Microsoft SQL Server, HTML, CSS, JavaScript, TypeScript, Jira, and Git.",
      ],
    },
    {
        title: "React/ Node Software Engineer Intern",
        company: "EMS - Griffin Global Technologies, Nyeri, Kenya",
        duration: "Feb 2024 - April 2024",
        description: [
          "Problem Solving: Collaborated with teams members to deliver a internal tool EMS system.",
          "Utilized Agile methodologies to ensure timely delivery of work by use of Jira for instance.",
          "Tech Stack and tools: React Js, Material UI, Docker, Node js, Microsoft SQL Server, HTML, CSS, JavaScript, TypeScript, Jira, and Git.",
        ],
      },
      {
        title: "Data Modeler/Data Analyst",
        company: "Sammons Financial Group - ArtSam Technologies, Nyeri, Kenya",
        duration: "August 2023 - Jan 2024",
        description: [
         "Provided translations to business requirements into data models to support big data platform solutions.",
         "Responsible for design, building & maintaining data architectures and best practices in modelling",
         "Engaged in data transformations and loading of data from various source systems as well.",
         "Tech Stack and tools:  Oracle, Postgres, Kafka, Kubernetes, Erwin, Git.",
        ],
      },

      {
        title: "Software Engineer Trainee",
        company: "The Jitu, Nyeri, Kenya",
        duration: "April 2023 - July 2023",
        description: [
          "Went through a training program on JavaScript, React, Node.js, Express, and SQL Server Database.",
          "Tasked with performing tests and writing reports to the supervisor.",
          "Tech Stack and tools: React Js, Material UI, Tailwind, Node js, Microsoft SQL Server, HTML, CSS, JavaScript, TypeScript, Jira, and Git.",
        ],
      },
  ];

  return (
    <div className="mt-1 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        My Work Experience
      </h2>
      <p className="text-lg text-center text-gray-400 mb-12">
        I&apos;ve worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here&apos;s the rundown:
      </p>
      <div className="relative max-w-4xl mx-auto">
        {/* Central vertical line */}
        <div className="border-l-2 border-gray-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div
            key={exp.title}
            className={`mb-12 flex flex-col md:flex-row items-center w-full ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div
              className={`w-full md:w-[48%] bg-gray-800 shadow-lg rounded-lg p-6 relative ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-400 italic">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <ul
                className={`text-gray-300 list-disc list-inside space-y-2 ${
                  index % 2 === 0 ? "md:pl-5" : "md:pr-5 md:text-left"
                }`}
              >
                {exp.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              {/* Timeline dot visible on medium screens and above */}
              <span
                className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#AC4746] rounded-full ${
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