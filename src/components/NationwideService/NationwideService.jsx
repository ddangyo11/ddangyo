import { useEffect } from "react";
import AOS from "aos";
import "./NationwideService.scss";
import map from "../../assets/images/map_pin.gif";
const NationwideService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="nationwide-service">
      <div className="nationwide-service__container">
        <h2 className="nationwide-service__title" data-aos="fade-up">
          땡겨요를 전국에서 만나요!
        </h2>
        <p
          className="nationwide-service__subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          이제는 언제 어디서든, 맛있는 음식을 땡겨요로 주문하세요
        </p>
        <div
          className="nationwide-service__map"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="nationwide-service__map-img"
            alt="전국 서비스 지도 이미지"
            src={map}
          />
        </div>
      </div>
    </section>
  );
};

export default NationwideService;
