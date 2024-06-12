import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import Discography from "./components/pages/Discography";
import Links from "./components/pages/Links";
import NotFound from "./components/pages/NotFound";
import Member from "./components/pages/Member";

function App() {
  return (
    <div className="app">
      <Router>
        <header className="header">
          <NavigationBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/member/:id" element={<Member />}/>
        </Routes>
        <main className="content"></main>
        <footer className="footer">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
