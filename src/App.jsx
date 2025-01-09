import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
