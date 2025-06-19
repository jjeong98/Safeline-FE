import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/SolutionCard.module.scss";
import { ISolutionItem } from "../../types";
//import ImageDisplay from "../../components/common/ImageDisplay";

/**
 * 솔루션 그리드에 표시될 개별 카드 컴포넌트.
 * @param {object} props
 * @param {object} props.item - 카드에 표시될 데이터.
 */

interface SolutionCardProps {
  item: ISolutionItem;
}

function SolutionCard({ item }: SolutionCardProps) {
  const cardStyle = {
    "--bg-image": `url(${item.image})`,
  } as React.CSSProperties;

  return (
    <Link to={item.link} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <img src={item.image} alt={item.name} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{item.name}</h3>
          <p className={styles.cardTagline}>{item.tagline}</p>
        </div>
      </div>
    </Link>
  );
}

/*function SolutionCard({ item }: { item: ISolutionItem }) {
  return (
    <Link to={item.link} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardImage} style={cardStyle}>
          {!item.image && <span>Image Coming Soon</span>}
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{item.name}</h3>
          <p className={styles.cardTagline}>{item.tagline}</p>
        </div>
      </div>
    </Link>
  );
} */

export default SolutionCard;
