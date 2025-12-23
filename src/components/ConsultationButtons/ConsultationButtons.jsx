import { useEffect } from "react";
import AOS from "aos";
import "./ConsultationButtons.scss";

const ConsultationButtons = ({ onOpenModal }) => {
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
      onClick: onOpenModal,
    },
    {
      id: 2,
      text: "카카오톡 채팅 상담",
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
            onClick={button.onClick}
          >
            <span>{button.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ConsultationButtons;
