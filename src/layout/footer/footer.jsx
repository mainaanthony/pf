

const Footer = () => {
  return (
    <footer className="bg-[#0A1E2E] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Positions of Interest */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Positions Of Interest</h3>
          <ul className="space-y-2">
            {[
              { id: 1, title: "React Js Developer" },
              { id: 2, title: "Node Js Developer" },
              { id: 3, title: "Angular Developer" },
              { id: 4, title: ".Net Developer" },
              { id: 5, title: "Full Stack Developer" },
            ].map((position) => (
              <li
                key={position.id}
                className="bg-[#112B3C] rounded-lg py-2 px-4 text-center"
              >
                {position.title}
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
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+Anthony+M.+Maina&dates=20250212T100000Z/20250212T110000Z&details=Let's+discuss+your+project!&location=Google+Meet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A1E2E] font-semibold py-2 px-4 rounded-lg inline-block"
            >
              Schedule a meeting
            </a>

          </div>
        </div>
      </div>

     {/* Contact via Email */}
     <div className="mt-10 text-center">
        <a
          href="mailto:mainaathonymwai@gmail.com"
          className="bg-[#1E88E5] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#1565C0] inline-block"
        >
          Contact Me Via Email
        </a>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6">
  <p className="text-sm text-gray-400">
    This website has been designed and developed by me:)
  </p>
  <p className="text-sm text-gray-400 mt-2">
    Copyright ©{" "}
    <a 
      href="https://x.com/tony_m_miley" 
      className="text-blue-400" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Anthony M. Maina
    </a>{" "}
    2024
  </p>
</div>
    </footer>
  );
};

export default Footer;
