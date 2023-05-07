import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Books} />
        <Route path="/categories" Component={Categories} />
      </Routes>
    </Router>
  );
}

export default App;
