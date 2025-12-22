import { useEffect } from "react";
import AOS from "aos";
import "./FreeService.scss";
import character01 from "../../assets/images/character_01.png";

const FreeService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="free-service">
      <div className="free-service__container">
        <div className="free-service__banner" data-aos="fade-up">
          <p className="free-service__banner-text">
            입점부터 설치까지 전부 무료
          </p>
        </div>
        <div className="free-service__content" data-aos="fade-up" data-aos-delay="200">
          <p className="free-service__description">
            입점 신청 후 담당자가 연락드릴 예정입니다. 가볍게 문의하세요!
          </p>
          <p className="free-service__phone">상담문의 010-7511-7151</p>
          <button className="free-service__button">
            <img
              className="free-service__button-icon"
              alt="신규 입점 상담"
              src={character01}
            />
            신규 입점 상담
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeService;

