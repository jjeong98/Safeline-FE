import React from "react";
import { useParams } from "react-router-dom";
import styles from "../scss/CaseDetailPage.module.scss";


const CaseDetailPage: React.FC = () => {
  const { id } = useParams();

  // 예시 데이터
  const caseData = {
    company: "삼성전자",
    background: "반도체 공정 안전 교육 혁신 필요",
    solution: "VR 안전 교육",
    effect: "교육생 사고율 30% 감소, 교육 만족도 4.8점",
    review: "실제 현장과 유사한 경험 덕분에 교육 효과가 매우 높았습니다.",
  };

  return (
    <div className={styles.caseDetail}>
      <h1>{caseData.company} 도입 사례</h1>
      <h2>도입 배경</h2>
      <p>{caseData.background}</p>
      <h2>적용 솔루션</h2>
      <p>{caseData.solution}</p>
      <h2>도입 효과</h2>
      <p>{caseData.effect}</p>
      <h2>고객 후기</h2>
      <blockquote>{caseData.review}</blockquote>
    </div>
  );
};

export default CaseDetailPage;
