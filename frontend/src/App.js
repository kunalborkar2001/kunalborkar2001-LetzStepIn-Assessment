import './App.css';
import Home from "../src/Pages/Home/Home"
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
