import { useState } from "react";
import MainSwiper from "./components/MainSwiper/MainSwiper";
import ConsultationButtons from "./components/ConsultationButtons/ConsultationButtons";
import Benefits from "./components/Benefits/Benefits";
import FreeService from "./components/FreeService/FreeService";
import NationwideService from "./components/NationwideService/NationwideService";
import ApplicationProcess from "./components/ApplicationProcess/ApplicationProcess";
import Footer from "./components/Footer/Footer";
import "./assets/scss/app.scss";
import "./App.scss";

function App() {
  const [isFreeServiceModalOpen, setIsFreeServiceModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsFreeServiceModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsFreeServiceModalOpen(false);
  };

  return (
    <div className="app">
      <MainSwiper onOpenModal={handleOpenModal} />
      <ConsultationButtons onOpenModal={handleOpenModal} />
      <Benefits />
      <ApplicationProcess />
      <NationwideService />
      <Footer />
      <FreeService isOpen={isFreeServiceModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
