import About from "./components/About";
import Benefits from "./components/Benefits";
import CardSection from "./components/CardSection";
import ContactUs from "./components/ContactUs";
import CustomerReports from "./components/CustomerReports";
import Hero from "./components/Hero";
import LastCall from "./components/LastCall";
import ObjectiveSection from "./components/ObjectiveSection";
import Revitalize from "./components/Revitalize";
import GlobalStyle from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <About />
      <ObjectiveSection />
      <CardSection />
      <Benefits />
      <Revitalize />
      <CustomerReports />
      <ContactUs />
      <LastCall />
    </>
  );
};

export default App;
