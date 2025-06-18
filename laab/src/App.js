import './App.css';
import Faqs from './faqs';
import Home from './home';
import Navbar from './Navbar';
import OurStory from './OurStory';
import Change from './change';
import Footer from './footer';
import Contact from './contact_form';
import ReadMore from './read_more';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <OurStory />
              <Faqs />
              <Change />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/our-story" element={<ReadMore />} />
      </Routes>
    </Router>
  );
}

export default App;
