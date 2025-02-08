

const Footer = () => {
  return (
    <footer className="bg-[#0A1E2E] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Positions of Interest */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Positions Of Interest</h3>
          <ul className="space-y-2">
            {[
              "React Js Developer",
              "Node Js Developer",
              "Angular Developer",
              ".Net Developer",
              "Full Stack Developer",
            ].map((position, index) => (
              <li
                key={index}
                className="bg-[#112B3C] rounded-lg py-2 px-4 text-center"
              >
                {position}
              </li>
            ))}
          </ul>
        </div>

        {/* Salary Range */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-4">Salary Range</h3>
          <div className="space-y-2">
            <p>Annual</p>
            <p className="text-gray-400">Accepting custom offers</p>
            <p>Per hour:</p>
            <p className="text-gray-400">Accepting custom offers</p>
          </div>
        </div>

        {/* Note Section */}
        <div>
          <div className="bg-[#112B3C] rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-4">
              NOTE: In case you have an idea for a project but you estimate that
              your budget may be very small, do not refrain from contacting me
              and presenting your project to me. I&apos;m working to provide flexible
              payment methods that allow us to carry out great projects, without
              cost being a barrier.
            </p>
            <button className="bg-white text-[#0A1E2E] font-semibold py-2 px-4 rounded-lg">
              Schedule a meeting
            </button>
          </div>
        </div>
      </div>

   {/* Contact via Email */}
   <div className="mt-10 text-center">
        <button className="bg-[#1E88E5] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#1565C0]">
          Contact Me Via Email
        </button>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          This website has been designed and developed by me:)
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Copyright ©{" "}
          <a href="https://yourwebsite.com" className="text-blue-400">
            Anthony M. Maina
          </a>{" "}
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
