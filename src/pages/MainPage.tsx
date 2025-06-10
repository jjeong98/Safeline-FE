import React from "react";
import HeroSection from "../components/mainPage/HeroSection";
import AboutSection from "../components/mainPage/AboutSection";
import ServiceHighlights from "../components/mainPage/ServiceHighlights";
import ClientLogos from "../components/mainPage/ClientLogos";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <HeroSection />
      <AboutSection />
      <ServiceHighlights />
      <ClientLogos />
    </div>
  );
};

export default MainPage;
