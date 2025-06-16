// src/pages/tsx/AboutPage.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../scss/AboutPage.module.scss';
import AboutHero from '../tsx/AboutHero';
import AboutIdentity from '../tsx/AboutIdentity';
import AboutStats from '../tsx/AboutStats';
import AboutPhilosophy from '../tsx/AboutPhilosophy';
import AboutPartners from '../tsx/AboutPartners';
import AboutCTA from '../tsx/AboutCTA';

/**
 * 브랜드 소개 페이지 (/about)
 * 스크롤에 따라 각 섹션이 나타나는 스토리텔링 형식의 페이지입니다.
 */
function AboutPage() {
  const [identityRef, identityInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [philosophyRef, philosophyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.aboutPage}>
      <AboutHero />
      <div ref={identityRef} className={`${styles.section} ${identityInView ? styles.visible : ''}`}>
        <AboutIdentity />
      </div>
      <div ref={statsRef} className={`${styles.section} ${statsInView ? styles.visible : ''}`}>
        <AboutStats />
      </div>
      <div ref={philosophyRef} className={`${styles.section} ${philosophyInView ? styles.visible : ''}`}>
        <AboutPhilosophy />
      </div>
      <div ref={partnersRef} className={`${styles.section} ${partnersInView ? styles.visible : ''}`}>
        <AboutPartners />
      </div>
      <div ref={ctaRef} className={`${styles.section} ${ctaInView ? styles.visible : ''}`}>
        <AboutCTA />
      </div>
    </div>
  );
}

export default AboutPage;