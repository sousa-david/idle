import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import Discography from "./components/pages/Discography";
import Links from "./components/pages/Links";
import Member from "./components/pages/Member";
import NotFound from "./components/pages/NotFound";

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
          <Route path="/member/:id" element={<Member />}/>
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate  replace to="/404" />} />
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
