import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/HeroSection.module.scss";

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  const isMobile = window.innerWidth < 830;

  return (
    <section className={styles.heroSection}>
      <div className={styles.background}>
        {isMobile ? (
          <img
            src="/assets/images/hero-mobile.jpg"
            alt="세이프라인 모바일 배경"
            className={styles.backgroundImage}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.backgroundVideo}
          >
            <source src="/BGV.mp4" type="video/mp4" />
            [영상을 지원하지 않는 브라우저입니다.]
          </video>
        )}
      </div>
    </section>
  );
};

export default HeroSection;