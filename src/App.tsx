import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from "./pages/Home/sections/About/About"
import Tecnologias from "./pages/Home/sections/About/About"
import Projects from "./pages/Home/sections/Projects/Projects"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App
