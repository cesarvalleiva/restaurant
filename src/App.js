import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carta from './pages/Carta';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<Carta />} />
      </Routes>
    </Router>
  );
}

export default App;
