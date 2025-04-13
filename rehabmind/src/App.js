import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz"; // 👈 New import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home includes About + Contact */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<Quiz />} /> {/* 👈 New route for Quiz */}
      </Routes>
    </Router>
  );
}

export default App;
