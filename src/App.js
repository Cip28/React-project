
import {  BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Header from './Header'
import Product from './Product'
import Registration from './Registration'
import Photo from './Photo'
import Contact from './Contact'
import Blog from './Blog'
import Help from './Help'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App () {
  return (
    <div className="App">    
      <Router>
        <div>     
          <Header />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/Photo" element={<Photo/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Help" element={<Help/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </div>
  )
}


export default App;
