// src/types.ts

export interface ISolution {
  id: string; // key로 사용될 고유 id
  categoryTitle: string; // 카테고리 구분을 위한 필드
  name: string;
  description: string;
  image: string;
  link: string;
}
// 솔루션 페이지에서 카테고리별로 그룹화된 데이터의 타입을 정의합니다.
/*export interface ISolutionCategory {
  title: string;
  description: string;
  items: ISolution[];
} */

// (고객사례 페이지를 위한 타입 정의도 여기에 추가합니다)
export interface ICaseStudy {
  id: string;
  clientName: string;
  clientLogo: string;
  title: string;
  heroImage: string;
  impactHeadline: string;
  problem: string;
  solution: string;
  result: string;
}
