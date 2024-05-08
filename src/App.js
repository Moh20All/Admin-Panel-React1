import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/requests" element={<Requests/>} />
      </Routes>
    </Router>
  );
}

export default App;
