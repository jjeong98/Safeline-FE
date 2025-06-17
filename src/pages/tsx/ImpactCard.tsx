// src/components/casesPage/tsx/ImpactCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/ImpactCard.module.scss";
import { ICaseStudy } from "../../types";

interface ImpactCardProps {
  caseStudy: ICaseStudy;
  index: number;
}

/**
 * 성과를 헤드라인으로 하는 임팩트 카드 컴포넌트.
 * 클릭 시 해당 사례의 상세 페이지로 이동합니다.
 */
function ImpactCard({ caseStudy, index }: ImpactCardProps) {
  // 순차적 애니메이션을 위한 딜레이 설정
  const style = {
    transitionDelay: `${index * 0.1}s`,
  };

  return (
    <Link to={`/cases/${caseStudy.id}`} className={styles.cardLink}>
      <div className={styles.card} style={style}>
        <div className={styles.cardContent}>
          <p className={styles.impactHeadline}>"{caseStudy.impactHeadline}"</p>
          <div className={styles.clientInfo}>
            <img
              src={caseStudy.clientLogo}
              alt={`${caseStudy.clientName} 로고`}
            />
            <span>{caseStudy.clientName}</span>
          </div>
        </div>
        <div className={styles.readMore}>
          <span>How we did it →</span>
        </div>
      </div>
    </Link>
  );
}

export default ImpactCard;
