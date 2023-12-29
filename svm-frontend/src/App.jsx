import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Header/Header';
import WelcomeScreen from './Welcome/WelcomeScreen';
import About from './About/About';
import ImageSlideshow from './image-slider/ImageSlideshow';
import Team from './Team/Team';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Signup from './Authentication/Signup'; 
import Login from './Authentication/Login'; 
import StudentData from './Studentdata/StudentData';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<StudentData />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <>
      <WelcomeScreen />
      <About />
      <ImageSlideshow />
      <Team />
      <Events />
      <Footer />
    </>
  );
}

export default App;
