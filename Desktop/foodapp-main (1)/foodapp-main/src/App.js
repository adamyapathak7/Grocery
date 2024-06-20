import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Order from './pages/Order';
import SingleRecipe from './pages/SingleRecipe';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Signup />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipe' element={<SingleRecipe />} />
</Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
