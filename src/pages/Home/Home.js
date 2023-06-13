import "./Home.css"
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
  
}
export default Home