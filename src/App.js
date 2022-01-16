import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carta from './pages/Carta';
import Navbar from './components/Navbar/Navbar';
import BurgerContext from './store/burgerContext';
import './App.css';

function App() {
  return (
    <BurgerContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
        </Routes>
      </Router>
    </BurgerContext>
  );
}

export default App;
