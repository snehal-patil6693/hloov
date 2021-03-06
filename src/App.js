import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
     <Router>
     <Header/>
     <Routes>
          <Route path='/' exact element={<Home/>} />
          
     </Routes>
     
     <Footer/> 
     </Router>
    </>
  );
}

export default App;
