import Experties from "./components/Experties/Experties";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss"

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experties />
  </div>
};

export default App;
