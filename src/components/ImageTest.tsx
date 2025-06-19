import React from "react";

/**
 * 오직 이미지 경로 테스트만을 위한 컴포넌트입니다.
 */
function ImageTest() {
  // public 폴더를 기준으로 절대 경로를 사용합니다.
  const imageUrl = "/image/m4d.png";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>이미지 테스트 페이지</h2>
      <p>아래에 이미지가 보여야 합니다:</p>
      <img
        src={imageUrl}
        alt="테스트 이미지"
        style={{ border: "5px solid red", maxWidth: "500px" }}
      />
      <p>
        이미지 경로 (src 속성): <strong>{imageUrl}</strong>
      </p>
    </div>
  );
}

export default ImageTest;
