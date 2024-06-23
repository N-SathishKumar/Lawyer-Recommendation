import React from 'react';
import './App.css';
import About from './components/about.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.js';
import Lawyers from './components/lawyers.js';
import Contact from './components/contact.js';

const lawyers = [
  {
    name: "Will Smith",
    practiceArea: "criminal",
    image: "assets/image/law.jpg",
  },
  {
    name: "Jane Doe",
    practiceArea: "personalInjury",
    image: "assets/image/law.jpg",
  },
  {
    name: "Bob Smith",
    practiceArea: "business",
    image: "assets/image/law.jpg",
  },
  {
    name: "John Doe",
    practiceArea: "criminal",
    image: "assets/image/law.jpg",
  },
  {
    name: "Alice Johnson",
    practiceArea: "personalInjury",
    image: "assets/image/law.jpg",
  },
  {
    name: "Michael Johnson",
    practiceArea: "criminal",
    image: "assets/image/law.jpg",
  },
  {
    name: "Emily Smith",
    practiceArea: "business",
    image: "assets/image/law.jpg",
  },
  {
    name: "Sarah Adams",
    practiceArea: "personalInjury",
    image: "assets/image/law.jpg",
  },
  {
    name: "David Lee",
    practiceArea: "business",
    image: "assets/image/law.jpg",
  },
  {
    name: "Alex Brown",
    practiceArea: "criminal",
    image: "assets/image/law.jpg",
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home lawyers={lawyers} showAllLawyersHeader={false} />} />
          <Route path="/about" element={<About />} />
          <Route path="/lawyers" element={<Lawyers lawyers={lawyers} showAllLawyersHeader={true} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
