import React from 'react';
import styles from '../scss/AboutPartners.module.scss';

/**
 * 주요 고객사 로고를 통해 사회적 신뢰도를 보여주는 섹션.
 */
function AboutPartners() {
  // 브로슈어들에 언급된 주요 고객사 목록 세이프라인_브로슈어.pdf, 2025 이동식캐리어_소개자료.pdf, 세이프라인_TMS_브로슈어.pdf]
  const logos = [
    { name: 'Samsung Electronics', src: '/assets/logos/samsung_ds.png' },
    { name: 'Samsung C&T', src: '/assets/logos/samsung_cnt.png' },
    { name: 'SK', src: '/assets/logos/sk.png' },
    { name: 'POSCO', src: '/assets/logos/posco.png' },
    { name: 'Lotte Human Resources Development Center', src: '/assets/logos/lotte_hrd.png' },
    { name: 'KOMIPO', src: '/assets/logos/komipo.png' },
    { name: 'KORAIL', src: '/assets/logos/korail.png' },
    { name: 'DSME', src: '/assets/logos/dsme.png' },
    { name: 'Amorepacific', src: '/assets/logos/amore.png' },
    { name: 'LH', src: '/assets/logos/lh.png' },
  ];

  return (
    <section className={styles.partnersSection}>
      <h2>최고의 기업들이 SAFELINE과 함께 안전을 만들어갑니다.</h2>
      <div className={styles.logoWall}>
        {logos.map(logo => <img key={logo.name} src={logo.src} alt={`${logo.name} logo`} />)}
      </div>
    </section>
  );
}
export default AboutPartners;