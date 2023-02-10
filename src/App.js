import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services'
import Userdashboard from './pages/Userdashboard';
import Privateroute from './components/Privateroute';
import Post from './components/Post';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/post" element={<Post/>}/>

<Route path="/user" element={<Privateroute/>}>
<Route path="dashboard" element={<Userdashboard/>}/>
</Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
