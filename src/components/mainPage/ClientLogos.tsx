import React, { useEffect, useRef } from "react";
import styles from "./ClientLogos.module.scss";

const clients = [
  { id: 1, name: "삼성전자", logo: "/assets/logos/samsung.svg" },
  { id: 2, name: "SK하이닉스", logo: "/assets/logos/sk-hynix.svg" },
  { id: 3, name: "LG전자", logo: "/assets/logos/lg.svg" },
  { id: 4, name: "현대자동차", logo: "/assets/logos/hyundai.svg" },
  { id: 5, name: "포스코", logo: "/assets/logos/posco.svg" },
  { id: 6, name: "롯데케미칼", logo: "/assets/logos/lotte.svg" },
];

const ClientLogos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollWidth - clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className={styles.clientLogos}>
      <div className={styles.container}>
        <h2 className={styles.title}>신뢰할 수 있는 파트너사</h2>
        <p className={styles.subtitle}>
          국내 주요 기업들과 함께 성장하고 있습니다
        </p>

        <div className={styles.logoContainer} ref={scrollRef}>
          <div className={styles.logoWrapper}>
            {clients.map((client) => (
              <div key={client.id} className={styles.logoItem}>
                <img
                  src={client.logo}
                  alt={`${client.name} 로고`}
                  className={styles.logo}
                />
              </div>
            ))}
            {/* 무한 스크롤을 위한 복제 로고들 */}
            {clients.map((client) => (
              <div key={`clone-${client.id}`} className={styles.logoItem}>
                <img
                  src={client.logo}
                  alt={`${client.name} 로고`}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
