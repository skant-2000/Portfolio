import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
    </BrowserRouter>
  );
}

export default App;
