import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServiceIntro.scss';

const ServiceIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      id: 1,
      title: '손님은 맛있는 음식을 빠르고 편하게',
      description: '간편한 주문으로 원하는 음식을 빠르게 받아보세요',
      delay: 0,
    },
    {
      id: 2,
      title: '주문부터 배달을 한 번에!',
      description: '땡겨요가 주문부터 배달까지 모든 과정을 책임집니다',
      delay: 200,
    },
    {
      id: 3,
      title: '사장님은 넓은 배달 권역으로 많은 매출 증가',
      description: '넓은 배달 권역으로 더 많은 고객에게 다가갑니다',
      delay: 400,
    },
  ];

  return (
    <section className="service-intro">
      <div className="service-intro__container">
        <h2 className="service-intro__title" data-aos="fade-up">
          왜 '땡겨요'가 착한배달앱일까요?
        </h2>
        <div className="service-intro__grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-intro__item"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-intro__icon">
                <img 
                  alt={service.title} 
                  src=""
                  className="service-intro__icon-img"
                />
              </div>
              <h3 className="service-intro__item-title">{service.title}</h3>
              <p className="service-intro__item-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;

