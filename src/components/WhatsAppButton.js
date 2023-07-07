import React from "react";
import LogoWA from "../assets/img/WhatsApp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+6285341416675&text=Halo%20Miftach%20saya%20ingin%20membeli%20Mobil."
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="fixed bottom-5 right-5"
        src={LogoWA}
        height="60px"
        width="60px"
        alt="WhatsApp Logo"
      />
    </a>
  );
};

export default WhatsAppButton;
