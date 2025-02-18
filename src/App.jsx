// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import { LoaderCircle } from 'lucide-react';

// Lazy load the components
const Content = lazy(() => import('./layout/content/content'));
const CVPage = lazy(() => import('./layout/content/cv'));
const Contact = lazy(() => import('./layout/contact/contact'));
const Portfolio = lazy(() => import('./layout/portfolio/portfolio'));


const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-custom-gradient text-white"
  >
    <LoaderCircle className="animate-spin w-12 h-12 mb-4" />
    <p className="text-lg font-semibold">Anthony&apos;s World is loading...</p>
  </div>
);

// MainLayout component for pages with Header and Footer
const MainLayout = () => {
  return (
    <div className="App flex flex-col h-full w-full min-h-screen border-4 px-4 relative">
      <Header />
      {/* Render nested content here */}
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router basename='/pf/' >
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* CV page (no header/footer) */}
          <Route path="/cv" element={<CVPage />} />
          
          {/* Main site pages (with header/footer) */}
          <Route path="/" element={<MainLayout />}>
            {/* Default route (Home/Content) */}
            <Route index element={<Content />} />
            {/* Contact page */}
            <Route path="contact" element={<Contact />} />
            {/* Portfolio Page */}
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
