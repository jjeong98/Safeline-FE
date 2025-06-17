import React from "react";
import styles from "../scss/CaseStudyGrid.module.scss";
import { ICaseStudy } from "../../types";
import { Link } from "react-router-dom";

interface CaseStudyGridProps {
  caseStudies: ICaseStudy[];
}

/**
 * 필터링된 고객사례들을 스토리형 카드로 보여주는 그리드 컴포넌트.
 * 카드 자체에 애니메이션 효과를 줄 수 있습니다.
 */
function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  if (caseStudies.length === 0) {
    return <div className={styles.noResults}>해당하는 사례가 없습니다.</div>;
  }
  return (
    <div className={styles.gridContainer}>
      {caseStudies.map((study) => (
        <Link
          to={`/cases/${study.id}`}
          key={study.id}
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${study.heroImage})` }}
            />
            <div className={styles.cardContent}>
              <img
                src={study.clientLogo}
                alt={`${study.clientName} 로고`}
                className={styles.clientLogo}
              />
              <div className={styles.storyLine}>
                <span className={styles.label}>문제점</span>
                <p>{study.problem}</p>
              </div>
              <div className={styles.storyLine}>
                <span className={styles.label}>해결책</span>
                <p>{study.solution}</p>
              </div>
              <div className={styles.storyLine}>
                <span className={styles.label}>핵심 성과</span>
                <p className={styles.result}>{study.result}</p>
              </div>
              <span className={styles.readMore}>자세히 보기 →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CaseStudyGrid;
