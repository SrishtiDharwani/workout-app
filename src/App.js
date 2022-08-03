import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      </ScrollToTop>
      
    </Box>
      <Footer />
    </React.Fragment>
    
  );
};

export default App;
