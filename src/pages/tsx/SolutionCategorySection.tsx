import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../scss/SolutionCategorySection.module.scss";
import SolutionCard from "./SolutionCard";
import { ISolution } from "../../types"; // types.ts에 타입 정의가 있다고 가정

// 이 컴포넌트가 받을 props의 타입을 정의합니다.
interface SolutionCategorySectionProps {
  title: string;
  description: string;
  items: ISolution[];
}

/**
 * 각 솔루션 카테고리(하드웨어, 소프트웨어 등)를 보여주는 섹션.
 * 스크롤에 따라 카드 등장 애니메이션을 트리거합니다.
 */
function SolutionCategorySection({
  title,
  description,
  items,
}: SolutionCategorySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <p className={styles.categoryDescription}>{description}</p>
      <div
        ref={ref}
        className={`${styles.gridContainer} ${inView ? styles.visible : ""}`}
      >
        {Array.isArray(items) &&
          items.map(
            (
              item // item 변수는 여기서만 사용
            ) => (
              <div key={item.id} className={styles.gridItemWrapper}>
                {/* ▼▼▼ 에러 발생 지점 수정 ▼▼▼
                item을 'solution'이라는 이름의 prop으로 전달합니다. */}
                <SolutionCard solution={item} />
              </div>
            )
          )}
      </div>
    </section>
  );
}

export default SolutionCategorySection;
