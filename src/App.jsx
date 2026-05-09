// import { useEffect } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';
// import Home from './pages/Home.jsx';
// import Page from './pages/Page.jsx';
// import { pageContent } from './data/site.js';

// function ScrollToTop() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       window.requestAnimationFrame(() => {
//         document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       });
//       return;
//     }
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname, hash]);

//   return null;
// }

// export default function App() {
//   return (
//     <div className="min-h-screen bg-mist text-ink">
//       <ScrollToTop />
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {pageContent.map((page) => (
//             <Route key={page.slug} path={page.path} element={<Page page={page} />} />
//           ))}
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }


import { useContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Page from './pages/Page.jsx';
// 1. Import our new ContentContext
import { ContentContext } from './context/ContentContext.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  // 2. Pull the live pages from Google Sheets
  const { pageContent } = useContext(ContentContext);

  return (
    <div className="min-h-screen bg-mist text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 3. This will now generate routes dynamically from your Sheet! */}
          {pageContent && pageContent.map((page) => (
            <Route key={page.slug} path={page.path} element={<Page page={page} />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}