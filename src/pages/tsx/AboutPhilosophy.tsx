import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../scss/AboutPhilosophy.module.scss';
import { Link } from 'react-router-dom';

/**
 * 세이프라인의 핵심 기술 철학을 3가지 가치로 나누어 소개하는 섹션.
 */
function AboutPhilosophy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const philosophies = [
    {
      title: '현실과 같은 몰입감',
      // M4D 시뮬레이터 설명 기반 세이프라인_브로슈어.pdf]
      description: '시각적 실감을 넘어 진동, 낙하, 감전 등 6종 이상의 복합 체감을 제공하여 실제와 같은 몰입 환경을 구현합니다.',
      visual: '/assets/images/philosophy_immersion.jpg', // TODO: 관련 이미지 경로
    },
    {
      title: '유연한 확장성',
      // VR Carrier 및 TMS 설명 기반
      description: '단 한 명의 교육자가 이동형 캐리어와 통합 관제 시스템(TMS)으로 수십 명의 집체 교육을 완벽하게 통제합니다.',
      visual: '/assets/images/philosophy_scalability.jpg', // TODO: 관련 이미지 경로
    },
    {
      title: '검증된 교육 콘텐츠',
      // 콘텐츠 라인업 및 LMS 설명 기반 세이프라인_브로슈어.pdf]
      description: '국내 최다 200종 이상의 산업별/사고유형별 콘텐츠와 학습관리시스템(LMS)의 데이터 분석으로 검증된 교육 효과를 제공합니다.',
      visual: '/assets/images/philosophy_content.jpg', // TODO: 관련 이미지 경로
    },
  ];

  return (
    <section className={styles.philosophySection}>
      <h2>우리의 기술 철학</h2>
      <div ref={ref} className={styles.philosophyGrid}>
        {philosophies.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.philosophyCard} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className={styles.cardVisual} style={{ backgroundImage: `url(${item.visual})` }}></div>
            <div className={styles.cardText}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.ctaLink}>
        <Link to="/solutions">모든 솔루션 확인하기 →</Link>
      </div>
    </section>
  );
}
export default AboutPhilosophy;