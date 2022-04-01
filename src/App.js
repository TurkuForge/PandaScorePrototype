import './App.css';
import 'C:/Users/marti/Documents/Projects/Turku Forge/panda-score-prototype/src/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/games/:gameName" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
