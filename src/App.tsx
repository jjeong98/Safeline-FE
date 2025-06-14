import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./components/mainPage/tsx/MainPage";
import SolutionDetailPage from "./pages/tsx/SolutionDetailPage";
import CaseDetailPage from "./pages/tsx/CaseDetailPage";
import MainGrid from './components/mainPage/tsx/MainGrid';
import AboutSection from './pages/tsx/AboutSection';
import ServiceHighlights from './pages/tsx/ServiceHighlights';
import ClientLogos from './pages/tsx/ClientLogos';
import HeroSection from "./components/mainPage/tsx/HeroSection";
// 아래는 샘플 플레이스홀더 페이지입니다. 실제 구현 시 각 파일로 대체
// const SolutionsPage = () => (
//   <div style={{ padding: 40 }}>솔루션 페이지 [플레이스홀더]</div>
// );
// const CasesPage = () => (
//   <div style={{ padding: 40 }}>고객사례 페이지 [플레이스홀더]</div>
// );
// const SupportPage = () => (
//   <div style={{ padding: 40 }}>지원/문의 페이지 [플레이스홀더]</div>
// );
//const NotFoundPage = () => <div style={{ padding: 40 }}>404 Not Found</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/solutions" element={<ServiceHighlights />} />
          <Route path="/cases" element={<ClientLogos />} />
          <Route path="/solutions/:id" element={<SolutionDetailPage />} />
          <Route path="/cases/:id" element={<CaseDetailPage />} />
          {/*<Route path="/support" element={<SupportPage />} />*/}
          {/*<Route path="*" element={<NotFoundPage />} />*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
