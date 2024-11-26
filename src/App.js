import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
 
function App() {
  return (
    <div className="App"> 
      <Router>
        
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            <Route path="/*" element={<NotFound/>}/> 
          </Routes>
        </div> 
      </Router>
    </div>
  );
}

export default App;
