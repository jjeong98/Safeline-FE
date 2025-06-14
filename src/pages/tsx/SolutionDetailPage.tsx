import React from "react";
import { useParams } from "react-router-dom";
import styles from "../scss/SolutionDetailPage.module.scss";

const SolutionDetailPage: React.FC = () => {
  const { id } = useParams();

  // 실제 서비스에서는 id로 API 호출 또는 데이터 조회
  // 예시 데이터
  const solution = {
    name: "VR 안전 교육",
    description: "가상현실을 활용한 실감나는 안전 교육 솔루션입니다.",
    features: [
      "실제와 유사한 가상 환경 제공",
      "반복 학습 및 실수에 대한 안전한 경험",
      "교육 효과 데이터 분석",
    ],
    image: "/assets/icons/vr-education.svg",
  };

  return (
    <div className={styles.solutionDetail}>
      <h1>{solution.name}</h1>
      <img src={solution.image} alt={solution.name} className={styles.image} />
      <p>{solution.description}</p>
      <h2>주요 기능</h2>
      <ul>
        {solution.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className={styles.cta}>견적 문의</button>
    </div>
  );
};

export default SolutionDetailPage;
