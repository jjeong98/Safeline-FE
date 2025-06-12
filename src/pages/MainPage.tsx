import React, { useState } from "react";
import HeroSection from "../components/mainPage/HeroSection";
import AboutSection from "../components/mainPage/AboutSection";
import ServiceHighlights from "../components/mainPage/ServiceHighlights";
import ClientLogos from "../components/mainPage/ClientLogos";
import Modal from "../components/common/Modal";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className={styles.mainPage}>
      <HeroSection onOpenQuoteModal={() => setQuoteOpen(true)} />
      <AboutSection />
      <ServiceHighlights />
      <ClientLogos />
      <Modal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        title="솔루션 견적 문의"
        size="medium"
      >
        <div style={{ padding: "2rem", textAlign: "center" }}>
          [견적 문의 폼 또는 안내 영역 플레이스홀더]
          <br />
          (실제 폼은 추후 구현)
        </div>
      </Modal>
    </div>
  );
};

export default MainPage;
