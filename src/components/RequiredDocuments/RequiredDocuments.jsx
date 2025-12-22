import { useEffect } from "react";
import AOS from "aos";
import "./RequiredDocuments.scss";
import character03 from "../../assets/images/character_03.png";

const RequiredDocuments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const documents = [
    "사업자등록증",
    "영업신고증",
    "통장사본 or 계좌",
  ];

  return (
    <section className="required-documents">
      <div className="required-documents__container">
        <div className="required-documents__left" data-aos="fade-right">
          <div className="required-documents__icon">
            <img
              className="required-documents__icon-img"
              alt="필수 서류"
              src={character03}
            />
          </div>
          <h3 className="required-documents__label">필수 서류</h3>
        </div>
        <div className="required-documents__right" data-aos="fade-left">
          {documents.map((doc, index) => (
            <div key={index} className="required-documents__item">
              <span className="required-documents__check">✓</span>
              <span className="required-documents__text">{doc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;

