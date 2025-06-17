import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../scss/CaseDetailPage.module.scss"; // 고유의 SCSS 파일 사용
// import { api } from '../../services/apiService';

/**
 * 특정 고객사례의 상세 정보를 보여주는 페이지.
 * 자체적으로 레이아웃과 콘텐츠 렌더링을 모두 담당합니다.
 */
function CaseDetailPage() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseData = async () => {
      // TODO: 실제 API 호출 로직: const data = await api.getCaseById(id);

      // --- "삼성물산" 사례에 대한 목업 데이터 예시 ---
      const mockData = {
        title: "삼성물산 SMART 안전교육",
        subtitle: "이동형 집체 교육 시스템 성공적 도입 사례",
        heroImage: "/assets/images/case_samsung_cnt.jpg", // TODO: 실제 이미지 경로
        sections: [
          {
            type: "testimonial",
            // 세이프라인_브로슈어.pdf]
            content:
              '<blockquote>"시설 구축에 대한 물리적 한계를 개선하여 공간의 제약사항을 단번에 해결할 수 있었습니다."</blockquote><cite>- 삼성물산 안전팀 담당자</cite>',
          },
          {
            type: "text",
            title: "도입 배경",
            content:
              "<p>전국 다수의 건설 현장에서 표준화된 안전 교육을 실시해야 했으나, 현장마다 별도의 체험 시설을 구축하는 데 현실적인 어려움이 있었습니다.</p>",
          },
          {
            type: "text",
            title: "적용 솔루션",
            //
            content:
              "<h4>VR CARRIER 및 산업현장 사고체험 콘텐츠</h4><p>이동성과 편의성이 뛰어난 VR Carrier를 도입하여, 원하는 장소 어디서든 즉시 VR 안전 체험장을 구축할 수 있도록 지원했습니다.</p>",
            image: "/assets/images/solution_carrier.jpg", // TODO: 실제 이미지 경로
          },
        ],
      };
      setCaseData(mockData);
      setLoading(false);
    };

    fetchCaseData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!caseData) return <div>고객사례 정보를 찾을 수 없습니다.</div>;

  // CaseDetailPage를 위한 JSX. SolutionDetailPage와 레이아웃이 약간 다를 수 있습니다.
  return (
    <div className={styles.detailPageContainer}>
      <header
        className={styles.heroSection}
        style={{ backgroundImage: `url(${caseData.heroImage})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          {/* 고객사례는 제목/부제목 구조가 다를 수 있으므로 커스터마이징 */}
          <span className={styles.caseStudyTag}>SUCCESS CASE</span>
          <h1>{caseData.title}</h1>
        </div>
      </header>

      <main className={styles.mainContent}>
        {caseData.sections.map((section: any, index: number) => (
          <section key={index} className={styles.contentSection}>
            {section.title && <h2>{section.title}</h2>}
            {/* testimonial 타입에 따라 다른 스타일 적용 가능 */}
            {section.content && (
              <div
                className={
                  section.type === "testimonial" ? styles.testimonial : ""
                }
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
            {section.image && (
              <img
                src={section.image}
                alt={section.title || ""}
                className={styles.sectionImage}
              />
            )}
          </section>
        ))}

        <div className={styles.backButtonContainer}>
          <Link to="/solutions" className={styles.backButton}>
            ← 모든 솔루션 보기
          </Link>
        </div>
      </main>
    </div>
  );
}

export default CaseDetailPage;
