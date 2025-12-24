import { useEffect } from "react";
import AOS from "aos";
import "./Promotion.scss";
import character01 from "../../assets/images/character_01.png";

const Promotion = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="promotion" data-aos="fade-up">
      <div className="promotion__container">
        <div className="promotion__banner">
          <img
            className="promotion__banner-img"
            alt="포장 주문 0원 프로모션 배너"
            src={character01}
          />
        </div>

        <div className="promotion__content">
          <h2 className="promotion__title">포장 주문 0원 프로모션</h2>
          <p className="promotion__description">
            배달비 없이 편리한 땡겨요 포장 주문 서비스
          </p>
          <p className="promotion__sub-description">
            주문 건당 0원으로 시작하는 특별한 혜택을 만나보세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
