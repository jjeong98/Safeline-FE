import axios from "axios";

// 백엔드 API 서버의 기본 주소. .env 파일로 관리하는 것이 좋습니다.
const API_BASE_URL = "http://localhost:8080/api";

/**
 * 모든 솔루션 목록을 가져오는 API 함수
 * @returns {Promise<any>} - API 응답 데이터
 */
export const getSolutions = async () => {
  try {
    // 백엔드의 /api/solutions 엔드포인트를 호출합니다.
    const response = await axios.get(`${API_BASE_URL}/solutions`);
    return response.data; // 성공 시 JSON 데이터를 반환합니다.
  } catch (error) {
    console.error("솔루션 데이터를 불러오는 데 실패했습니다:", error);
    throw error; // 에러 발생 시 상위 컴포넌트에서 처리할 수 있도록 던져줍니다.
  }
};

// TODO: 향후 다른 API 호출 함수들을 여기에 추가합니다.
// export const getSolutionById = async (id) => { ... };
