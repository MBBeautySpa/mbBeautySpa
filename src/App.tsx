
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home.tsx';
import NavBar from './components/NavBar.tsx';
const App = () => {
  return (
    <div className="bg-pink-100" id="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<div>about</div>} />
        <Route path="/services" element={<div>services</div>} />
        <Route path="/gallery" element={<div>gallery</div>} />
      </Routes>
    </div>

  )
}

export default App
