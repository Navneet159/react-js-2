import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import About from './pages/aboutus';
import Contact from './pages/contactus';
import Home from './pages/homepage';





function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/home' element={<Home />} ></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
