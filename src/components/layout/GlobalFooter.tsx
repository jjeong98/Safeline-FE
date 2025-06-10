import React from "react";
import { Link } from "react-router-dom";
import styles from "./GlobalFooter.module.scss";

const GlobalFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <h3>세이프라인</h3>
            <p>대표: 홍길동</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
            <p>전화: 02-1234-5678</p>
            <p>이메일: contact@safeline.com</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>회사</h4>
              <Link to="/about">회사소개</Link>
              <Link to="/solutions">솔루션</Link>
              <Link to="/cases">고객사례</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>지원</h4>
              <Link to="/support">기술지원</Link>
              <Link to="/faq">자주묻는질문</Link>
              <Link to="/contact">문의하기</Link>
            </div>

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
            &copy; {new Date().getFullYear()} 세이프라인. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
