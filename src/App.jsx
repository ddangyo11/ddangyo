import MainSwiper from "./components/MainSwiper/MainSwiper";
import ConsultationButtons from "./components/ConsultationButtons/ConsultationButtons";
import Benefits from "./components/Benefits/Benefits";
import RequiredDocuments from "./components/RequiredDocuments/RequiredDocuments";
import FreeService from "./components/FreeService/FreeService";
import NationwideService from "./components/NationwideService/NationwideService";
import ApplicationProcess from "./components/ApplicationProcess/ApplicationProcess";
import Footer from "./components/Footer/Footer";
import "./assets/scss/app.scss";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <MainSwiper />
      <ConsultationButtons />
      <Benefits />
      <RequiredDocuments />
      <FreeService />
      <NationwideService />
      <ApplicationProcess />
      <Footer />
    </div>
  );
}

export default App;
