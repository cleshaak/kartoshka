import Navbar from "./Components/Navbar";
import War from "./Components/War";
import Footer from "./Footer";
import Section from "./Components/section";
import Popular from "./popular";
import Trending from "./trending";
import Science from "./science";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/cartoon" element={<Section />}/>
    <Route path="/War" element={<War />}/>
    <Route path="/popular" element={<Popular />}/>
    <Route path="/science" element={< Science />}/>
    <Route path="/trending" element={<Trending />}/>
   
    </Routes> 
    <Navbar />
    <War />
    <Footer />
    </BrowserRouter>
    
    
    
  );
}

export default App;


