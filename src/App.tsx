import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';  // ✅ Import this
import { theme } from './styles/theme';
import GlobalStyle from './styles/global-styles';
import SEOHelmet from './components/seo/seo-helmet';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/home-page/home-page';
import ServicesPage from './pages/service-page/service-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <HelmetProvider>  
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <SEOHelmet />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/support" element={<ServicesPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
