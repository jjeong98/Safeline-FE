import React from 'react';
import styles from '../scss/AboutHero.module.scss';

/**
 * About 페이지의 첫인상을 결정하는 히어로 섹션.
 * 브랜드의 핵심 미션을 전달합니다.
 * @see [엠라인스튜디오] 세이프라인_브로슈어.pdf - Page 2
 */
function AboutHero() {
  // 브로슈어 2페이지의 "세이프라인의 미션은... 소중한 생명을 지키는 일입니다." 세이프라인_브로슈어.pdf] 내용을 기반으로 핵심 메시지 구성
  const missionStatement = "우리는 XR 안전교육 시스템을 통해 산업 현장의 소중한 생명을 지키는 일을 합니다.";

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImage}>
        {/* SCSS 파일에서 브로슈어 2페이지의 고품질 이미지를 배경으로 설정합니다. */}
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{missionStatement}</h1>
      </div>
    </section>
  );
}

export default AboutHero;