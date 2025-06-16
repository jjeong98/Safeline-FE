import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/AboutCTA.module.scss';
// 재사용 버튼을 사용할 경우 Button.module.scss의 클래스를 직접 사용하거나,
// 이 컴포넌트의 SCSS에서 스타일을 오버라이드할 수 있습니다.
// 여기서는 Link와 a 태그에 직접 클래스를 부여하는 예시로 보여드립니다.

function AboutCTA() {
  return (
    <section className={styles.ctaSection}>
      <h2>세이프라인의 기술력, 더 깊이있게 확인해보시겠습니까?</h2>
      <div className={styles.buttonGroup}>
        <Link to="/solutions" className={`${styles.button} ${styles.primary}`}>
          모든 솔루션 보기
        </Link>
        <a
          href="/assets/brochure/safeline_brochure.pdf" // TODO: 실제 브로슈어 경로
          className={`${styles.button} ${styles.secondary}`}
          download
        >
          브로슈어 다운로드
        </a>
      </div>
    </section>
  );
}
export default AboutCTA;

// 만약 AboutCTA.module.scss에 .button, .primary, .secondary 스타일이 정의되어 있다면,
// 이 코드는 정상적으로 작동합니다. 공통 버튼 스타일을 참고하여 작성하면 됩니다.