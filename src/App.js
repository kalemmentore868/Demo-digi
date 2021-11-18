import "./App.css";
import { SliderData, SlidesArray } from "./components/data/SliderData";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { AppData } from "./components/data/AppsData";
import DigiAppsSection from "./components/DigiAppsSection";
import { OffersData } from "./components/data/OffersData";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection slides={SliderData} slideArray={SlidesArray} />
      <DigiAppsSection appData={AppData} offersData={OffersData} />
    </>
  );
}

export default App;
