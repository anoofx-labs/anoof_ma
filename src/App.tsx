import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { ModelDetail } from './pages/ModelDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/model/:id" element={<ModelDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
