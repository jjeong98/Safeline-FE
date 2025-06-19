import React, { useState, useEffect } from "react";
import styles from "../scss/SolutionsPage.module.scss";
import SolutionCategorySection from "../tsx/SolutionCategorySection";
import { ISolutionCategory, ISolutionItem } from "../../types";
import { getSolutions } from "../../services/apiService";

/**
 * 전체 솔루션 라인업을 보여주는 허브 페이지 (/solutions).
 * 백엔드 API로부터 데이터를 직접 받아와 카테고리별로 그룹화하여 렌더링합니다.
 */

function SolutionsPage() {
  const [categories, setCategories] = useState<ISolutionCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndGroupSolutions = async () => {
      try {
        const flatSolutionList: ISolutionItem[] = await getSolutions();

        // 백엔드에서 받은 데이터를 카테고리별로 그룹화하는 로직
        const groupedData = flatSolutionList.reduce((acc, currentItem) => {
          let category = acc.find((c) => c.title === currentItem.categoryTitle);
          if (category) {
            category.items.push(currentItem);
          } else {
            acc.push({
              title: currentItem.categoryTitle,
              description: `${currentItem.categoryTitle} 관련 솔루션입니다.`, // TODO: 설명은 별도 관리 필요
              items: [currentItem],
            });
          }
          return acc;
        }, [] as ISolutionCategory[]);

        console.log("groupedData", groupedData);
        groupedData.forEach((category) => {
          category.items.forEach((item) => {
            console.log("item.image:", item.image);
          });
        });

        setCategories(groupedData);
      } catch (err) {
        setError("솔루션 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndGroupSolutions();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        서버에서 솔루션 목록을 불러오는 중...
      </div>
    );
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
