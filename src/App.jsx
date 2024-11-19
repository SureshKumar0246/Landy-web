
import './App.css'
import Navbar from './components/Navbar'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Main3 from './components/Main3'
import Main4 from './components/Main4'
import Main5 from './components/Main5'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
      {/* <Route path="/about" element={<Main4/>}/> */}
      
      </Routes>
      <Navbar/>
      <Main1/>
       <div id="about"></div>
      {/* <Main2/> */}
      <div id="product"></div>
      <Main3 />
      <div id='mission'></div>
      <Main4/>
      <Main5/>
      <div id="contact"></div>
      <Contact/>
      <Footer/>
      
      </BrowserRouter>
      
     
    </>
  )
}

export default App
