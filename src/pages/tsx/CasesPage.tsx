import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../scss/CasesPage.module.scss";
import ImpactCard from "../tsx/ImpactCard";
import { ICaseStudy } from "../../types";
import { getCases } from "../../services/apiService";

/**
 * 고객사례 페이지 (/cases).
 * '성과 중심'의 임팩트 카드를 API로부터 받아와 렌더링합니다.
 */
function CasesPage() {
  const [caseStudies, setCaseStudies] = useState<ICaseStudy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCases();
        setCaseStudies(data);
      } catch (err) {
        setError("고객사례 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (loading) {
    return (
      <div className={styles.loading}>서버에서 고객사례를 불러오는 중...</div>
    );
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.casesPage}>
      <header className={styles.pageHeader}>
        <h1>결과로 증명하는 가치</h1>
        <p>
          고객이 경험한 놀라운 성과를 먼저 확인하고, 그 비결을 파헤쳐보세요.
        </p>
      </header>

      <div
        ref={ref}
        className={`${styles.gridContainer} ${inView ? styles.visible : ""}`}
      >
        {caseStudies.map((study, index) => (
          <ImpactCard key={study.id} caseStudy={study} index={index} />
        ))}
      </div>
    </div>
  );
}

export default CasesPage;
