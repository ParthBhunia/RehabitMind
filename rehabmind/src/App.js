import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      {/* Navbar includes the top banner now */}
      <Navbar />
      <Home />
      <About />
      <Blogs />
      <Contact />
      <SignIn />
      <SignUp />
      
    </div>
  );
}

export default App;