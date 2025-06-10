import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutSection.module.scss";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            혁신적인 XR 기술로
            <br />
            안전한 미래를 만들어갑니다
          </h2>

          <div className={styles.description}>
            <p>
              세이프라인은 가상현실(VR)과 증강현실(AR) 기술을 활용하여 산업
              현장의 안전 교육을 혁신하고 있습니다.
            </p>
            <p>
              실제와 유사한 가상 환경에서 안전 교육을 진행함으로써, 실수로 인한
              위험 없이 효과적인 교육이 가능합니다.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.number}>100+</span>
              <span className={styles.label}>기업 고객</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.number}>50,000+</span>
              <span className={styles.label}>교육생</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.number}>30%</span>
              <span className={styles.label}>사고 감소율</span>
            </div>
          </div>

          <div className={styles.cta}>
            <Link to="/about" className={styles.primaryButton}>
              회사소개 더보기
            </Link>
            <a
              href="/assets/catalog/company-intro.pdf"
              className={styles.secondaryButton}
              download
            >
              회사소개 카탈로그 다운로드
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
