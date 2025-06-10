import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            [영상을 지원하지 않는 브라우저입니다.]
          </video>
        )}
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          XR 기술로 만드는
          <br />
          안전한 산업 환경
        </h1>
        <p className={styles.subtitle}>
          가상현실(VR)과 증강현실(AR)을 활용한
          <br />
          혁신적인 안전 교육 솔루션
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/solutions" className={styles.primaryButton}>
            솔루션 살펴보기
          </Link>
          <Link to="/contact" className={styles.secondaryButton}>
            문의하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
