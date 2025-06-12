import React from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import GlobalFooter from "./GlobalFooter";
//import FloatingQuoteButton from "./FloatingQuoteButton";
import styles from "./Layout.module.scss";

interface LayoutProps extends React.PropsWithChildren<{}> {}

/**
 * 전체 애플리케이션의 기본 레이아웃을 제공하는 컴포넌트
 * 헤더, 메인 콘텐츠 영역, 푸터를 포함합니다.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <GlobalHeader />
      <main className={styles.main}>{children}</main>
      <GlobalFooter />
      {/*<FloatingQuoteButton />*/}
    </div>
  );
};

export default Layout;
