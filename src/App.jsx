import { useEffect } from "react";
import Routes from "./Routes";
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 80,
      once: false,
    });
  }, []);
  return <Routes />;
}

export default App;
