import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { browserRouter as Router } from "React-router-dom";
import "./app.css";
  

export const App = () => {
  return <Router>
  
    <Navbar />
    <Hero />
    <WorkoutSessions />
    <Gallery />
    <Pricing />
    <Contact />
    <BMICalculator />
    <Footer />
    <ToastContainer theme='dark' position='top-center'/>
    
  </Router>;
}
export default App;