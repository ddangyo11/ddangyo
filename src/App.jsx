import MainSwiper from "./components/MainSwiper/MainSwiper";
import ConsultationButtons from "./components/ConsultationButtons/ConsultationButtons";
import Benefits from "./components/Benefits/Benefits";
import NationwideService from "./components/NationwideService/NationwideService";
import ApplicationProcess from "./components/ApplicationProcess/ApplicationProcess";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import Footer from "./components/Footer/Footer";
import "./assets/scss/app.scss";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <MainSwiper />
      <ConsultationButtons />
      <Benefits />
      <ApplicationProcess />
      <NationwideService />
      <ServiceInfo />
      <Footer />
    </div>
  );
}

export default App;
