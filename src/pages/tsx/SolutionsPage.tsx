import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../scss/SolutionsPage.module.scss";
import SolutionCard from "../tsx/SolutionCard";
import { ISolutionCategory, ISolutionItem } from "../../types"; // 정의한 타입을 import 합니다.

/**
 * SolutionCategory 컴포넌트의 props 타입을 정의합니다.
 */
interface SolutionCategoryProps {
  title: string;
  description: string;
  items: ISolutionItem[];
}

/**
 * 각 솔루션 카테고리 섹션을 위한 재사용 컴포넌트.
 * props에 명시적으로 타입을 지정하여 에러를 해결합니다.
 */
const SolutionCategory = ({
  title,
  description,
  items,
}: SolutionCategoryProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100,
  });

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <p className={styles.categoryDescription}>{description}</p>
      <div
        ref={ref}
        className={`${styles.gridContainer} ${inView ? styles.visible : ""}`}
      >
        {/*
          'items'가 ISolutionItem[] 타입임을 알기 때문에,
          TypeScript는 자동으로 'item'이 ISolutionItem 타입이고, 'index'가 number 타입임을 추론할 수 있습니다.
          따라서 .map() 내부의 에러도 함께 해결됩니다.
        */}
        {items.map((item, index) => (
          <div key={index} className={styles.gridItemWrapper}>
            <SolutionCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

function SolutionsPage() {
  // 카탈로그 기반으로 정리된 목업(mockup) 데이터
  const solutionCategories = [
    {
      title: "하드웨어 솔루션",
      description: "산업 현장의 몰입감을 극대화하는 혁신적인 XR 체험 장비",
      items: [
        {
          name: "SAFELINE M4D",
          tagline: "세상에서 가장 스마트한 XR 4D 시뮬레이터",
          image: "/assets/images/solution_m4d.jpg",
          link: "/solutions/safeline-m4d",
        },
        {
          name: "3-Axis Motion Simulator",
          tagline: "시각적 실감을 넘어 동적 체감까지",
          image: "/assets/images/solution_3axis.jpg",
          link: "/solutions/3-axis-simulator",
        },
        {
          name: "VR CARRIER",
          tagline: "최고의 이동형 VR 집체 교육 솔루션",
          image: "/assets/images/solution_carrier.jpg",
          link: "/solutions/vr-carrier",
        },
        {
          name: "Safeline Basic",
          tagline: "일체형 키오스크로 편리하게 즐기는 PC VR",
          image: "/assets/images/solution_basic.jpg",
          link: "/solutions/safeline-basic",
        },
      ],
    },
    {
      title: "소프트웨어 & 플랫폼",
      description: "완벽한 VR 교육을 위한 강력하고 유연한 통합 운영 시스템",
      items: [
        {
          name: "Total Management System (TMS)",
          tagline: "단 한 명의 교육자가 실현하는 완벽한 VR 집체교육",
          image: "/assets/images/solution_tms.jpg",
          link: "/solutions/tms",
        },
      ],
    },
    {
      title: "콘텐츠 패키지",
      description: "국내 최다, 산업별/유형별 맞춤형 VR 안전 교육 콘텐츠",
      items: [
        {
          name: "산업현장 사고체험 패키지",
          tagline: "대표적인 산업 재해 및 작업 사고 VR 콘텐츠 8종",
          image: "/assets/images/content_industrial.jpg",
          link: "/solutions/content-industrial",
        },
        {
          name: "화학물질 사고대응 패키지",
          tagline: "다양한 화학사고 시나리오 기반 VR 콘텐츠 5종",
          image: "/assets/images/content_chemical.jpg",
          link: "/solutions/content-chemical",
        },
        // TODO: 다른 콘텐츠 패키지 추가
      ],
    },
  ];

  return (
    <div className={styles.solutionsPage}>
      <header className={styles.pageHeader}>
        <h1>우리의 솔루션</h1>
        <p>
          세이프라인은 하드웨어, 소프트웨어, 콘텐츠를 아우르는 통합 XR 안전
          솔루션을 제공합니다.
        </p>
      </header>
      {solutionCategories.map((category) => (
        <SolutionCategory
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
