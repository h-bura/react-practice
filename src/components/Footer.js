import React from "react";
import "../styles/Footer.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p>&copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;
