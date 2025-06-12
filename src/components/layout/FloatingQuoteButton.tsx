import React, { useState } from "react";
import styles from "./FloatingQuoteButton.module.scss";
import Modal from "../common/Modal";

const FloatingQuoteButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.floatingButton}
        onClick={() => setOpen(true)}
        aria-label="견적 문의 열기"
      >
        <span className={styles.icon}>💬</span>
        <span className={styles.text}>견적 문의</span>
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="솔루션 견적 문의"
        size="medium"
      >
        <div style={{ padding: "2rem", textAlign: "center" }}>
          [견적 문의 폼 또는 안내 영역 플레이스홀더]
          <br />
          (실제 폼은 추후 구현)
        </div>
      </Modal>
    </>
  );
};

export default FloatingQuoteButton;
