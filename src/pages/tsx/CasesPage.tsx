import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../scss/CasesPage.module.scss";
import ImpactCard from "../tsx/ImpactCard";
import { ICaseStudy } from "../../types";

/**
 * 고객사례 페이지 (/cases).
 * '성과 중심'의 임팩트 카드를 그리드 형식으로 보여줍니다.
 */
function CasesPage() {
  // TODO: 실제 데이터는 API로부터 받아와야 합니다.
  const caseStudies: ICaseStudy[] = [
    {
      id: "samsung-cnt",
      clientName: "삼성물산",
      clientLogo: "/assets/logos/samsung_cnt.png",
      title: "SMART 안전교육 시스템 구축",
      heroImage: "/assets/images/case_samsung_cnt.jpg",
      impactHeadline: "전국 현장 교육 표준화 달성",
      problem: "다수 건설 현장의 일관성 없는 교육 및 시설 구축 한계",
      solution: "이동형 VR Carrier 도입으로 표준화된 체험 교육 제공",
      result: "전사적 안전 문화 강화 및 교육 접근성 대폭 향상.",
    },
    {
      id: "komipo",
      clientName: "한국중부발전",
      clientLogo: "/assets/logos/komipo.png",
      title: "실제같은 발전소 사고 체험 훈련",
      heroImage: "/assets/images/case_komipo.jpg",
      impactHeadline: "사고 대응 능력 2.5배 향상",
      problem: "텍스트/영상 위주 교육의 낮은 몰입도 및 위험성",
      solution: "복합 체감형 M4D 시뮬레이터 및 맞춤형 콘텐츠 도입",
      result:
        "실제와 동일한 가상 환경에서의 반복 훈련으로 위기 대응 능력 및 안전 의식 극대화.",
    },
    {
      id: "lotte-hrd",
      clientName: "롯데인재개발원",
      clientLogo: "/assets/logos/lotte_hrd.png",
      title: "신입사원 대상 안전의식 강화 교육",
      heroImage: "/assets/images/case_lotte.jpg",
      impactHeadline: "교육 몰입도 98% 달성",
      problem: "안전 불감증을 겪는 신입사원들의 낮은 교육 참여도",
      solution: "시네마틱 VR 콘텐츠를 활용한 스토리텔링 기반 안전 교육",
      result:
        "게임처럼 즐기는 VR 콘텐츠를 통해 교육생들의 자발적 참여와 높은 몰입도 유도.",
    },
    // ... 다른 고객사례 데이터
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
