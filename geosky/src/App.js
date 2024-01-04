import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header.js';
import Home from './components/layout/Home.js';
import About from './components/layout/About.js';
import Fleet from './components/layout/Fleet.js';
import MyFlight from './components/layout/MyFlight.js';
import Container from './components/layout/Container.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route element={<Container customClass='min_height' />}>
              <Route exact path='/' element={<Home />}/>
              <Route path='/about' element={<About />} />
              <Route path='/fleet' element={<Fleet />}/>
              <Route path='/myflight' element={<MyFlight />}/>
            </Route>
          </Routes>
        <Footer />
      </Router>
    </div>
      
    
  );
}

export default App;
