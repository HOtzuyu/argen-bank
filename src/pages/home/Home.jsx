import React from "react";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";

/**
 * Home page _ first page
 * @returns {JSX.Element} Home component
 */
function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}

export default Home;
