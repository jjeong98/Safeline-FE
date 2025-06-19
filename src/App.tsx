import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Layout from "./components/layout/Layout";
import MainPage from "./components/mainPage/tsx/MainPage";
import SolutionDetailPage from "./pages/tsx/SolutionDetailPage";
import CaseDetailPage from "./pages/tsx/CaseDetailPage";
//import AboutSection from './pages/tsx/AboutSection';
//import ServiceHighlights from "./pages/tsx/ServiceHighlights";
//import ClientLogos from "./pages/tsx/ClientLogos";
import AboutPage from "./pages/tsx/AboutPage";
import SolutionsPage from "./pages/tsx/SolutionsPage";
import CasesPage from "./pages/tsx/CasesPage";
//import ImageTest from "./components/ImageTest";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/cases" element={<CasesPage />} />
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
