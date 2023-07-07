import React from "react";

// import routes and route
import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Produk from "./pages/Produk";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./pages/about";
// import Header1 from "./components/Header1";

const App = () => {
  return (
    <div className="max-w-full mx-auto bg-white">
      <Header />
      {/* <Header1 /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/produk" element={<Produk />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
