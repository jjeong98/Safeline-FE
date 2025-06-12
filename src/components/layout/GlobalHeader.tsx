import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./GlobalHeader.module.scss";

const GlobalHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/logo_safeline_v3.png" alt="세이프라인" />
        </Link>

        <nav className={styles.nav}>
          <Link
            to="/about"
            className={location.pathname === "/about" ? styles.active : ""}
          >
            세이프라인
          </Link>
          <Link
            to="/solutions"
            className={location.pathname === "/solutions" ? styles.active : ""}
          >
            솔루션
          </Link>
          <Link
            to="/cases"
            className={location.pathname === "/cases" ? styles.active : ""}
          >
            고객사례
          </Link>
          <Link
            to="/support"
            className={location.pathname === "/support" ? styles.active : ""}
          >
            기술지원
          </Link>
        </nav>

        <button className={styles.quoteButton}>견적문의</button>
      </div>
    </header>
  );
};

export default GlobalHeader;
