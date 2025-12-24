import { useEffect } from "react";
import AOS from "aos";
import "./RequiredDocuments.scss";

const RequiredDocuments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const documents = ["사업자등록증", "영업신고증", "통장사본 or 계좌"];

  return (
    <section className="required-documents" data-aos="fade-up">
      <div className="required-documents__container">
        <div className="required-documents__left">
          <div className="required-documents__icon"></div>
          <h3 className="required-documents__label">필수 서류</h3>
        </div>
        <div className="required-documents__right">
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
