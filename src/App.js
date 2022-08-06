import logo from './logo.svg';
import './App.css';
import Home from './Component/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'

function App() {
  return (
     <>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
     </Routes>
     <Footer />
     </BrowserRouter>   
     </>
  );
}

export default App;
