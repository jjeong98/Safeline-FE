import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceHighlights.module.scss";

const services = [
  {
    id: 1,
    title: "VR 안전 교육",
    description:
      "가상현실을 활용한 실감나는 안전 교육으로, 실제와 유사한 환경에서 안전하게 학습할 수 있습니다.",
    icon: "/assets/icons/vr-education.svg",
    link: "/solutions/vr-education",
  },
  {
    id: 2,
    title: "AR 작업 지원",
    description:
      "증강현실을 통해 작업 현장에서 실시간으로 안전 정보와 작업 가이드를 제공합니다.",
    icon: "/assets/icons/ar-support.svg",
    link: "/solutions/ar-support",
  },
  {
    id: 3,
    title: "안전 관리 시스템",
    description:
      "XR 기술을 활용한 종합적인 안전 관리 시스템으로, 사고 예방과 대응을 지원합니다.",
    icon: "/assets/icons/safety-management.svg",
    link: "/solutions/safety-management",
  },
];

const ServiceHighlights: React.FC = () => {
  return (
    <section className={styles.serviceHighlights} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>
          혁신적인 XR 솔루션으로
          <br />
          안전한 작업 환경을 만듭니다
        </h2>

        <div className={styles.services}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <Link to={service.link} className={styles.learnMore}>
                자세히 알아보기
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/solutions" className={styles.primaryButton}>
            모든 솔루션 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
