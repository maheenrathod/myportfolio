import './App.css';
import { Navigation } from './Components/Navigation';
import { Banner } from "./Components/Banner";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
