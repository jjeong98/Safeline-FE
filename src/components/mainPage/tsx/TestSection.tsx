// TestSection.tsx 파일
import React from 'react';

// 컴포넌트 이름을 TestSection으로 변경
const TestSection: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100%', backgroundColor: 'green', color: 'white', fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      TestSection 파일 렌더링 성공!
    </div>
  );
};

// export 이름도 변경
export default TestSection;