

const CVPage = () => {
  // Your original PDF URL
  const cvUrl = `${import.meta.env.BASE_URL}ResumeAnthonyMwaiMainaResume2024.pdf`;

  // Encode and prepend with the Google Docs viewer URL
  const googleDocsViewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(cvUrl)}`;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="w-full max-w-4xl mx-auto px-4 py-4 flex justify-between items-start">
        <h1 className="text-2xl font-bold">Anthony&apos;s CV</h1>
        <a
          href={cvUrl}
          download
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Download CV PDF
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          {/* Use Google Docs Viewer for better mobile compatibility */}
          <object
            data={googleDocsViewerUrl}
            type="text/html"
            width="100%"
            height="1000px"
          >
            {/* Fallback content if Google Docs cannot display the PDF */}
            <div className="p-4 text-black">
              <p className="mb-2">
                Your device/browser may not support displaying PDFs inline.
              </p>
              <a href={cvUrl} download className="text-blue-600 underline">
                Click here to download the PDF file.
              </a>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
};

export default CVPage;
