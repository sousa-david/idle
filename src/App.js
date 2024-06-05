import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import Discography from "./components/pages/Discography";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/idle" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/discography" element={<Discography />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
