import Experties from "./components/Experties/Experties";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/Works";
import People from "./components/people/people";
import Footer from "./components/Footer/Footer";
import css from "./styles/app.module.scss"

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experties />
    <Works />
    <Portfolio />
    <Footer />
  </div>
};

export default App;
