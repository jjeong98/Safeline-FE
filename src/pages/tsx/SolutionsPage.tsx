import React, { useState, useEffect } from "react";
import styles from "../scss/SolutionsPage.module.scss";
import SolutionCategorySection from "../tsx/SolutionCategorySection";
import { ISolutionCategory } from "../../types"; // 타입 정의 파일
import { getSolutions } from "../../services/apiService"; // 방금 만든 API 호출 함수

/**
 * 전체 솔루션 라인업을 보여주는 허브 페이지.
 * 이제 백엔드 API로부터 데이터를 직접 받아와 렌더링합니다.
 */
function SolutionsPage() {
  // 1. 상태 변수 설정: 데이터를 담을 'categories', 로딩 상태 'loading', 에러 상태 'error'
  const [categories, setCategories] = useState<ISolutionCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 2. 데이터 가져오기: 컴포넌트가 처음 렌더링될 때 한 번만 API를 호출합니다.
  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        // 이전에 우리가 JSON 구조로 설계했던 데이터가 여기에 담깁니다.
        // 하지만 실제로는 categoryTitle을 기준으로 그룹화하는 로직이 필요합니다.
        // 우선은 백엔드에서 받은 데이터를 그대로 사용합니다.
        const rawData = await getSolutions();

        // TODO: 백엔드에서 받은 flat list를 categoryTitle 기준으로 그룹화하는 로직 추가
        // 지금은 모든 아이템을 하나의 카테고리로 묶는 임시 로직을 사용합니다.
        const groupedData = [
          {
            title: "전체 솔루션",
            description: "세이프라인이 제공하는 모든 솔루션 라인업입니다.",
            items: rawData,
          },
        ];

        setCategories(groupedData);
        setError(null);
      } catch (err) {
        setError("솔루션 정보를 불러오는 데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []); // 빈 배열 []은 컴포넌트가 처음 마운트될 때 한 번만 실행하라는 의미

  // 3. 조건부 렌더링
  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.solutionsPage}>
      <header className={styles.pageHeader}>
        <h1>우리의 솔루션</h1>
        <p>
          세이프라인은 하드웨어, 소프트웨어, 콘텐츠를 아우르는 통합 XR 안전
          솔루션을 제공합니다.
        </p>
      </header>
      {categories.map((category) => (
        <SolutionCategorySection
          key={category.title}
          title={category.title}
          description={category.description}
          items={category.items}
        />
      ))}
    </div>
  );
}

export default SolutionsPage;
