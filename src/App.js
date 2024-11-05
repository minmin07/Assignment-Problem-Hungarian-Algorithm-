import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FiCalendar, FiList } from "react-icons/fi";
import AssignmentProblem from "./pages/AssignmentProblem";
import Timetable from "./pages/Timetable";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Scheduling Web App</h1>
          <nav className="flex space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-blue-200"
            >
              <FiList /> <span>Assignment Problem</span>
            </Link>
            <Link
              to="/timetable"
              className="flex items-center space-x-2 hover:text-blue-200"
            >
              <FiCalendar /> <span>Timetable</span>
            </Link>
          </nav>
        </header>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<AssignmentProblem />} />
            <Route path="/timetable" element={<Timetable />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
