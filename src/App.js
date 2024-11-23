import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
   <>
   <div>
    <Router>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/project' element={<Projects/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>

</Routes>
</Router>
   </div>
   </>
  );
}

export default App;
