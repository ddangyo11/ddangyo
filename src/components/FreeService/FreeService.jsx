import { useEffect, useState } from "react";
import AOS from "aos";
import "./FreeService.scss";
import character01 from "../../assets/images/logo_02.png";

const FreeService = ({ isOpen = false, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const documents = ["사업자등록증", "영업신고증", "통장사본 or 계좌"];

  const handleClose = () => {
    setIsModalOpen(false);
    if (onClose) onClose();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (onClose === undefined) {
      // prop으로 onClose가 전달되지 않으면 직접 처리
      // (하지만 여기서는 항상 prop으로 받음)
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="free-service-floating-button"
        onClick={handleOpenModal}
        aria-label="신규 입점 상담"
      >
        <img
          className="free-service-floating-button__icon"
          alt="신규 입점 상담"
          src={character01}
        />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="free-service-modal"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="free-service-modal__content">
            <button
              className="free-service-modal__close"
              onClick={handleClose}
              aria-label="닫기"
            >
              ×
            </button>

            {/* Required Documents Section */}
            <div className="free-service-modal__documents-section">
              <div
                className="free-service-modal__documents-left"
                data-aos="fade-right"
              >
                <h3 className="free-service-modal__documents-label">
                  필수 서류
                </h3>
              </div>
              <div
                className="free-service-modal__documents-right"
                data-aos="fade-left"
              >
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="free-service-modal__documents-item"
                  >
                    <span className="free-service-modal__documents-check">
                      ✓
                    </span>
                    <span className="free-service-modal__documents-text">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Service Section */}
            <div
              className="free-service-modal__service-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="free-service-modal__description">
                입점 신청 후 담당자가 연락드릴 예정입니다. 가볍게 문의하세요!
              </p>
              <p className="free-service-modal__phone">
                상담문의 010-7511-7151
              </p>
              <button className="free-service-modal__button">
                신규 입점 상담
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FreeService;
