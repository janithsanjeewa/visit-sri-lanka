
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import React from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import DestinationDetailPage from './pages/DestinationDetailPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
	<Route path="/blog" element={<BlogPage />} />
	<Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/destination/:destinationSlug" element={<DestinationDetailPage />} />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
