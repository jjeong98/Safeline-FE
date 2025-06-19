import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../scss/SolutionCategorySection.module.scss";
import SolutionCard from "./SolutionCard";
import { ISolutionItem } from "../../types"; // types.ts에 타입 정의가 있다고 가정

// 이 컴포넌트가 받을 props의 타입을 정의합니다.
interface SolutionCategorySectionProps {
  title: string;
  description: string;
  items: ISolutionItem[];
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
    triggerOnce: true, // 애니메이션은 한 번만 실행됩니다.
    threshold: 0.1, // 섹션이 화면에 10% 보일 때 애니메이션이 시작됩니다.
    delay: 100,
  });

  // inView가 true가 되면 'visible' 클래스가 추가되어 애니메이션이 시작됩니다.
  const gridClasses = `${styles.gridContainer} ${inView ? styles.visible : ""}`;

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <p className={styles.categoryDescription}>{description}</p>
      <div ref={ref} className={gridClasses}>
        {Array.isArray(items) &&
          items.map((item, index) => (
            // 각 카드 아이템을 감싸는 wrapper를 두어, 여기에 애니메이션 delay를 적용합니다.
            <div key={item.id || index} className={styles.gridItemWrapper}>
              <SolutionCard item={item} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default SolutionCategorySection;
