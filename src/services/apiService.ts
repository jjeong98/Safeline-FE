import axios from "axios";
import { ISolutionItem, ICaseStudy } from "../types";

// 백엔드 API 서버의 기본 주소. .env 파일로 관리하는 것이 좋습니다.
const API_BASE_URL = "http://localhost:8080/api";

/**
 * 모든 솔루션 목록을 가져오는 API 함수
 * @returns {Promise<ISolutionItem[]>} - API 응답 데이터
 */
export const getSolutions = async (): Promise<ISolutionItem[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/solutions`);
    return response.data.solutionCategories;
  } catch (error) {
    console.error("솔루션 데이터를 불러오는 데 실패했습니다:", error);
    throw error; // 에러 발생 시 상위 컴포넌트에서 처리할 수 있도록 던져줍니다.
  }
};

/**
 * 모든 고객사례 목록을 가져오는 API 함수
 * @returns {Promise<ICaseStudy[]>}
 */
export const getCases = async (): Promise<ICaseStudy[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cases`);
    return response.data.caseStudies;
  } catch (error) {
    console.error("고객사례 데이터를 불러오는 데 실패했습니다:", error);
    throw error;
  }
};
