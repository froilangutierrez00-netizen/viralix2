import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/checkout';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { ConfigCatProvider, createConsoleLogger, LogLevel } from "configcat-react";
import { AuthProvider } from './contexts/AuthContext';

function App() {

  const logger = createConsoleLogger(LogLevel.Info);

  const ConfigCatProviderTyped = ConfigCatProvider as unknown as React.ComponentType<any>;

  return (
    <>
      <ConfigCatProviderTyped sdkKey="configcat-sdk-1/mSTeCCvt40uNNpsx3167WA/garm33QKqEqZCGSRYfvbeA" options={{ logger }}>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </ConfigCatProviderTyped>
    </>
  );
}

export default App
