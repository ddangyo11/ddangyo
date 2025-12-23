import "./Footer.scss";
import logo02 from "../../assets/images/logo_02.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <img className="footer__logo-img" alt="땡겨요 로고" src={logo02} />
          </div>
          <div className="footer__info">
            <p className="footer__text">
              땡겨요 공식협력사 (전 지역 가입 가능)
            </p>
            <p className="footer__text">최은정 팀장</p>
            <p className="footer__text">ddangyo11@gmail.com</p>
            <p className="footer__text footer__text--phone">010-7511-7151</p>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyright © 2025 Ddanggyeo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
