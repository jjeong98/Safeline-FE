// src/types.ts

export interface ISolutionItem {
  link: string;
  image?: string;
  name: string;
  tagline: string;
}

export interface ISolutionCategory {
  // 필요한 속성 정의
  // 예시:
  name: string;
  items: ISolutionItem[];
}

export interface IChallenge {
  id: string;
  name: string;
}

export interface ICaseStudy {
  id: string; // URL 경로를 위한 고유 ID (예: 'samsung-cnt')
  clientName: string;
  clientLogo: string;
  title: string; // 상세 페이지에서 사용될 전체 프로젝트 제목
  heroImage: string;
  impactHeadline: string; // 그리드 카드에 표시될 핵심 성과 헤드라인
  problem: string;
  solution: string;
  result: string; // 상세 페이지에서 사용될 구체적인 결과 설명
}
