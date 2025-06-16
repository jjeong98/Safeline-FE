import React from 'react';
import CountUp from 'react-countup';
import styles from '../scss/AboutStats.module.scss';
// import CountUp from 'react-countup'; // 숫자 애니메이션을 위한 라이브러리 (선택)

/**
 * 숫자를 통해 브랜드의 성과와 신뢰도를 보여주는 섹션.
 * 기존 AboutSection.tsx의 통계와 브로슈어 내용을 종합했습니다.
 */
function AboutStats() {
  const stats = [
    // 브로슈어 내용 기반 세이프라인_브로슈어.pdf]
    { number: 200, suffix: '+', text: '국내 최다 안전 VR 콘텐츠' },
    // 이동식 캐리어 소개자료 기반
    { number: 40, suffix: '+', text: '전국 주요 현장 적용' },
    // 기존 코드(AboutSection.tsx)의 데이터를 반영
    { number: 50000, suffix: '+', text: '누적 교육 이수자' },
  ];

  return (
    <section className={styles.statsSection}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div className={styles.statNumber}>
            <CountUp
              end={stat.number}
              suffix={stat.suffix}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className={styles.statText}>{stat.text}</div>
        </div>
      ))}
    </section>
  );
}
export default AboutStats;