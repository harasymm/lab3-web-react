import Header from "./Components/Header";
import Summary from "./Components/Summary";
import PersonalInfo from "./Components/PersonalInfo";
import SocialMedia from "./Components/SocialMedia";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <PersonalInfo />
      <SocialMedia />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;