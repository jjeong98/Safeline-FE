import React, { useState, useEffect } from "react";
import styles from "../scss/SolutionsPage.module.scss";
//import SolutionCategorySection from "../tsx/SolutionCategorySection";
import { ISolution } from "../../types";
import { getSolutions } from "../../services/apiService";
import { useInView } from "react-intersection-observer";
import SolutionCard from "./SolutionCard";

function SolutionsPage() {
  const [solutions, setSolutions] = useState<ISolution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const data = await getSolutions();
        setSolutions(data);
      } catch (err) {
        setError("솔루션 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchSolutions();
  }, []);

  // 스크롤 애니메이션을 위한 설정
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (loading) return <div className={styles.statusMessage}>로딩 중...</div>;
  if (error) return <div className={styles.statusMessage}>{error}</div>;

  return (
    <div className={styles.solutionsPage}>
      <header className={styles.pageHeader}>
        <h1>우리의 솔루션</h1>
        <p>
          세이프라인은 하드웨어, 소프트웨어, 콘텐츠를 아우르는 통합 XR 안전
          솔루션을 제공합니다.
        </p>
      </header>

      {/* ▼▼▼ 이 부분이 핵심 수정 사항입니다 ▼▼▼
        카테고리별로 map을 돌리는 대신, 전체 solutions 배열에 대해
        하나의 gridContainer 안에서 map을 실행합니다.
      */}
      <main
        ref={ref}
        className={`${styles.gridContainer} ${inView ? styles.visible : ""}`}
      >
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </main>
    </div>
  );
}

export default SolutionsPage;
