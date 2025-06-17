import React from "react";
import { Link } from "react-router-dom";
import styles from "./GlobalFooter.module.scss";

const GlobalFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <div className={styles.logo}>
              <img src="/logo_safeline_v3.png" alt="세이프라인" />
            </div>
            <p>Tel: 02-6053-1094</p>
            <p>E-mail: safeline_team@m-line.tv</p>
          </div>

          <div className={styles.links}>
            {/* <div className={styles.linkGroup}>
              <h4>회사</h4>
              <Link to="/about">세이프라인</Link>
              <Link to="/solutions">솔루션</Link>
              <Link to="/cases">고객사례</Link>
            </div> */}

            {/* <div className={styles.linkGroup}>
              <h4>지원</h4>
              <Link to="/support">기술지원</Link>
              <Link to="/faq">자주묻는질문</Link>
              <Link to="/contact">문의하기</Link>
            </div> */}

            <div className={styles.linkGroup}>
              <h4>법적 고지</h4>
              <Link to="/privacy">개인정보처리방침</Link>
              <Link to="/terms">이용약관</Link>
            </div>
          </div>

          <div className={styles.social}>
            <h4>소셜 미디어</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; Copyright {new Date().getFullYear()} SAFELINE. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
