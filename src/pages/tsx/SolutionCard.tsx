import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/SolutionCard.module.scss";
import { ISolution } from "../../types";

interface SolutionCardProps {
  solution: ISolution; // prop 이름을 'solution'으로 통일
}

/**
 * 개별 솔루션 정보를 보여주는 프레젠테이션 컴포넌트.
 */
function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Link to={solution.link} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <img src={solution.image} alt={solution.name} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{solution.name}</h3>
          <p className={styles.cardTagline}>{solution.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default SolutionCard;
