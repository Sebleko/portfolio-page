import React from "react";
import Header from "../components/Header";
import TechStack from "../components/TechStack";
import PortfolioShowcase from "../components/PortfolioShowcase";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TechStack />
      <PortfolioShowcase />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
