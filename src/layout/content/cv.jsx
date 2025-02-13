

const CVPage = () => {
    const cvUrl = `${import.meta.env.BASE_URL}ResumeAnthonyMwaiMainaResume2024.pdf`;


  return (
    <div className="cv-page min-h-screen text-gray-800 bg-[rgba(14, 13, 13, 0.3)] backdrop-blur-md">
      Header with title and download button
      <header className="p-3 flex justify-between items-center bg-opacity-30 backdrop-blur-xs text-white">
        <h1 className="text-xl font-bold mr-10">My CV</h1>
        <a
          href={cvUrl}
          download
          className="bg-white text-[#AC4746] font-bold px-4 py-2 rounded-md"
        >
          Download CV PDF
        </a>
      </header>

      {/* PDF Viewer */}
      <div className="pdf-viewer p-4 flex justify-center">
        <iframe
          src={cvUrl}
          title="CV PDF"
          width="100%"
          height="800px"
          className="border"
          
        />
      </div>
    </div>
  );
};

export default CVPage;
