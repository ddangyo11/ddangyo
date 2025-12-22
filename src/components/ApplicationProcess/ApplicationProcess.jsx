import { useEffect } from "react";
import AOS from "aos";
import "./ApplicationProcess.scss";
import character01 from "../../assets/images/character_01.png";
import character02 from "../../assets/images/character_02.png";
import character03 from "../../assets/images/character_03.png";
import character04 from "../../assets/images/character_04.png";

const ApplicationProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: "입점신청",
      description: "",
      icon: character01,
    },
    {
      id: 2,
      title: "가게방문/유선상담",
      description: "등록 및 상담에 대한 추가 비용을 받지 않습니다.",
      icon: character02,
    },
    {
      id: 3,
      title: "우리가게 맞춤 등록 진행",
      description: "",
      icon: character03,
    },
    {
      id: 4,
      title: "광고시작",
      description: "(업체 자동금 지급)",
      icon: character04,
    },
  ];

  return (
    <section className="application-process">
      <div className="application-process__container">
        <h2 className="application-process__title" data-aos="fade-up">
          땡겨요 신청절차
        </h2>
        <div className="application-process__grid">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="application-process__item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="application-process__step-label">
                STEP {step.id}
              </div>
              <div className="application-process__icon">
                <img
                  className="application-process__icon-img"
                  alt={step.title}
                  src={step.icon}
                />
              </div>
              <h3 className="application-process__step-title">{step.title}</h3>
              {step.description && (
                <p className="application-process__step-description">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;

