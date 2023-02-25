import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <div id="home">
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
