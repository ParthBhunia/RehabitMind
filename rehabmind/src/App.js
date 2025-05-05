import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz";
import ChildrenQuiz from "./pages/Childrenquiz";
import TeenQuiz from "./pages/TeenQuiz";
import AdultQuiz from "./pages/AdultQuiz";
import AutismFriendlyPage from "./pages/AutismFriendlyPage"; // Make sure this file exists

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/childrenquiz" element={<ChildrenQuiz />} />
        <Route path="/teenquiz" element={<TeenQuiz />} />
        <Route path="/adultquiz" element={<AdultQuiz />} />
        <Route path="/autism-friendly" element={<AutismFriendlyPage />} />

      </Routes>
    </Router>
  );
}

export default App;
