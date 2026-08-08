import { Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Contact from "./routes/contact";
import Service from "./routes/service";
import About from "./routes/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;