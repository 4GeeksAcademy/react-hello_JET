import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-1">&copy; 2025 MySite. All rights reserved.</p>
          <p className="mb-0">
            <a href="#" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Disclaimer
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
