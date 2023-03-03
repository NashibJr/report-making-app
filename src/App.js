import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterMarks from "./forms/marksForm";
import ReportCard from "./forms/reportCard";
import ShowPupils from "./forms/showPupils";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EnterMarks />} />
        <Route path="/reportcard" element={<ReportCard />} />
        <Route path="/showpupils" element={<ShowPupils />} />
      </Routes>
    </Router>
  );
};

export default App;
