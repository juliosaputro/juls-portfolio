import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
