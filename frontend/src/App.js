import './App.css';
import Home from "../src/Pages/Home/Home"
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import SampleNavbar from './Components/SampleNavbar/SampleNavbar';

function App() {
  
  return (
    <div className='app' id="Home">
      <Navbar />
      {/* <SampleNavbar /> */}
      <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/category'  element={<CategoryPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
