import React from "react";
import styles from "../scss/MainPage.module.scss";
import HeroSection from "./HeroSection";
import MainGrid from "./MainGrid";


const MainPage: React.FC = () => {

  return (
    <div className={styles.mainPage}>
      <HeroSection />
      <MainGrid />


      {/*<Modal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        title="솔루션 견적 문의"
        size="medium"
      >
      </Modal>*/}
    </div>
  );
};

export default MainPage;
