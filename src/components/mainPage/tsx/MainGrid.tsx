import React from "react";
import { Link } from "react-router-dom";
import styles from "../scss/MainGrid.module.scss";


const MainGrid: React.FC = () => {
  const gridItems = [
    {
      id: 1,
      title: "세이프라인",
      description: "혁신적인 XR 기술로 안전한 미래를 만들어갑니다",
      image: "/assets/images/about-preview.jpg",
      link: "/about",
      color: "#4A90E2"
    },
    {
      id: 2,
      title: "솔루션",
      description: "혁신적인 XR 솔루션으로 안전한 작업 환경을 만듭니다",
      image: "/assets/images/solutions-preview.jpg",
      link: "/solutions",
      color: "#50E3C2"
    },
    {
      id: 3,
      title: "고객사",
      description: "국내 주요 기업들과 함께 성장하고 있습니다",
      image: "/assets/images/cases-preview.jpg",
      link: "/cases",
      color: "#F5A623"
    }
  ];

  return (
    <div className={styles.mainGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {gridItems.map((item) => (
            <Link to={item.link} key={item.id} className={styles.gridItem}>
              <div className={styles.content} style={{ backgroundColor: item.color }}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                <span className={styles.arrow}>→</span>
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainGrid; 