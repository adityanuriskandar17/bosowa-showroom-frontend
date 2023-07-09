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
import TentangKami from "./pages/TentangKami";
import Contact from "./pages/Contact";
import Promo from "./pages/Promo";
import PromoDetails from "./pages/PromoDetails";
// import Header1 from "./components/Header1";

const App = () => {
  return (
    <div className="max-w-full mx-auto bg-white">
      <Header />
      {/* <Header1 /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/promo/:id" element={<PromoDetails />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
