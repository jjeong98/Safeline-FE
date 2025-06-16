import React from 'react';
import styles from '../scss/AboutIdentity.module.scss';

/**
 * SAFELINE 브랜드의 정체성을 명확히 정의하는 섹션.
 * @see [엠라인스튜디오] 세이프라인_브로슈어.pdf - Page 2
 */
function AboutIdentity() {
  return (
    <section className={styles.identitySection}>
      <h2>SAFELINE</h2>
      {/* "SAFELINE은 XR솔루션 전문업체 엠라인스튜디오의 VR 안전교육 시스템 브랜드 입니다." 세이프라인_브로슈어.pdf] */}
      <p>XR 솔루션 전문업체 (주)엠라인스튜디오의 VR 안전교육 시스템 브랜드입니다.</p>
    </section>
  );
}
export default AboutIdentity;