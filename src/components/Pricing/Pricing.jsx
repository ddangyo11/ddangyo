import { useEffect } from 'react';
import AOS from 'aos';
import './Pricing.scss';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const regions = [
    { name: '서울특별시', fees: ['3,400원', '3,100원', '2,900원', '2,900원'] },
    { name: '경기도', fees: ['3,400원', '3,100원', '2,900원', '2,900원'] },
    { name: '인천광역시', fees: ['3,300원', '3,000원', '2,800원', '2,800원'] },
    { name: '부산광역시', fees: ['3,100원', '2,800원', '2,600원', '2,600원'] },
    { name: '대구광역시', fees: ['3,100원', '2,800원', '2,600원', '2,600원'] },
    { name: '대전광역시', fees: ['3,100원', '2,800원', '2,600원', '2,600원'] },
    { name: '광주광역시', fees: ['3,100원', '2,800원', '2,600원', '2,600원'] },
    { name: '울산광역시', fees: ['3,000원', '2,700원', '2,500원', '2,500원'] },
  ];

  return (
    <section className="pricing">
      <div className="pricing__container">
        <div className="pricing__banner" data-aos="fade-up">
          <img 
            className="pricing__banner-img" 
            alt="상생요금제 배너" 
            src=""
          />
        </div>
        
        <div className="pricing__content" data-aos="fade-up" data-aos-delay="200">
          <h2 className="pricing__title">땡겨요 요금제 안내</h2>
          <p className="pricing__subtitle">
            주문 건당 수수료 2% 이하의 저렴한 배달 중개 수수료
          </p>

          <div className="pricing__table-wrapper">
            <table className="pricing__table">
              <thead>
                <tr>
                  <th>지역</th>
                  <th>1구간</th>
                  <th>2구간</th>
                  <th>3구간</th>
                  <th>4구간</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, index) => (
                  <tr key={index}>
                    <td>{region.name}</td>
                    <td>{region.fees[0]}</td>
                    <td>{region.fees[1]}</td>
                    <td>{region.fees[2]}</td>
                    <td>{region.fees[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pricing__commission">
            <h3 className="pricing__commission-title">주문 중개 수수료</h3>
            <div className="pricing__commission-grid">
              <div className="pricing__commission-item">
                <span className="pricing__commission-label">1구간 (기본구간)</span>
                <span className="pricing__commission-value">7.8%</span>
              </div>
              <div className="pricing__commission-item">
                <span className="pricing__commission-label">2구간</span>
                <span className="pricing__commission-value">6.8%</span>
              </div>
              <div className="pricing__commission-item">
                <span className="pricing__commission-label">3구간</span>
                <span className="pricing__commission-value">6.8%</span>
              </div>
              <div className="pricing__commission-item">
                <span className="pricing__commission-label">4구간</span>
                <span className="pricing__commission-value">2.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

