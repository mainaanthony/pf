// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Content from './layout/content/content';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import CVPage from './layout/content/cv';
import Contact from './layout/contact/contact';
import Portfolio from './layout/portfolio/portfolio';

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
    </Router>
  );
}

export default App;
