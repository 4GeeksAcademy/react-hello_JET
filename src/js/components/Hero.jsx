import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">We offer awesome services to help you succeed.</p>
          <a href="#services" className="btn btn-primary btn-lg mt-3">
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
