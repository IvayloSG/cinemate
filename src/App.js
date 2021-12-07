import { Routes, Route } from 'react-router-dom';

import Explore from './components/Explore/Explore'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <main id="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
