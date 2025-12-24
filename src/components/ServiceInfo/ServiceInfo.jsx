import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceInfo.scss";
import image from "../../assets/images/logo_02.png";
const ServiceInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // AOS 새로고침 (스크롤 이벤트 후)
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    AOS.refresh(); // 초기 로드 시 한 번 새로고침

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const documents = ["사업자등록증", "영업신고증", "통장사본 or 계좌"];

  return (
    <section className="service-info">
      <div className="service-info__container">
        {/* Required Documents Section */}
        <div className="service-info__documents-section" data-aos="fade-up">
          <div className="service-info__documents-box">
            <div className="service-info__documents-left">
              <h2>필수 서류</h2>
              <div className="service-info__documents-list">
                {documents.map((doc, index) => (
                  <div key={index} className="service-info__documents-item">
                    <span className="service-info__documents-check">✓</span>
                    <span className="service-info__documents-text">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-info__documents-right">
              <div className="service-info__documents-icon">
                <img
                  className="service-info__documents-icon-img"
                  alt="필수 서류 아이콘"
                  src={image}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Free Service Section */}
        <div
          className="service-info__free-section"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="service-info__banner">
            <span className="service-info__banner-text">
              입점부터 설치까지 전부
            </span>
            <span className="service-info__banner-text service-info__banner-text--highlight">
              무료
            </span>
          </div>
          <p className="service-info__description">
            입점 상담 신청 후 담당자가 연락드릴 예정입니다. 가볍게 문의만
            남겨주세요!
          </p>
          <div className="service-info__contact">
            <span className="service-info__contact-label">상담문의</span>
            <a href="tel:010-7511-7151" className="service-info__contact-phone">
              010-7511-7151
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
