import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "../src/screens/Terms";
import Guide from "../src/screens/Guide";
import CameraVerification from "../src/screens/CameraVerification";
import Complete from "../src/screens/Complete";
import SidePose from "../src/screens/SidePose";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terms />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/CameraVerification" element={<CameraVerification />} />
        <Route path="/SidePose" element={<SidePose />} />
        <Route path="/Complete" element={<Complete />} />
      </Routes>
    </Router>
  );
}

export default App;