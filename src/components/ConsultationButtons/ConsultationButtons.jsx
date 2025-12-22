import { useEffect } from "react";
import AOS from "aos";
import "./ConsultationButtons.scss";
import character01 from "../../assets/images/character_01.png";
import character02 from "../../assets/images/character_02.png";
import character04 from "../../assets/images/character_04.png";

const ConsultationButtons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const buttons = [
    {
      id: 1,
      text: "신규 입점 상담",
      icon: character01,
    },
    {
      id: 2,
      text: "카카오톡 채팅 상담",
      icon: character04,
    },
    {
      id: 3,
      text: "전화 상담 010-7511-7151",
      icon: character02,
    },
    {
      id: 4,
      text: "문자 상담 010-7511-7151",
      icon: character04,
    },
  ];

  return (
    <section className="consultation-buttons">
      <div className="consultation-buttons__container">
        {buttons.map((button, index) => (
          <button
            key={button.id}
            className="consultation-buttons__button"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              className="consultation-buttons__icon"
              alt={button.text}
              src={button.icon}
            />
            <span>{button.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ConsultationButtons;

