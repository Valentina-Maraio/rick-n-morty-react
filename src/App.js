import './App.css';
import Home from './components/Home'
import Fav from './components/Fav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {CardProvider} from './context/allContext';

function App() {
  return (
    <CardProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/fav" element={<Fav />}></Route>
          </Routes>
        </Router>
    </CardProvider>
  );
}

export default App;
