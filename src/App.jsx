import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProjectTracker from "./pages/ProjectTracker.jsx";
import Feedback from "./pages/Feedback.jsx";
import QuarterlyPlanning from "./pages/QuarterlyPlanning.jsx";
import HelpRequests from "./pages/HelpRequests.jsx";
import BugTracker from "./pages/BugTracker.jsx";
import Backlog from "./pages/Backlog.jsx";
import DealTracker from "./pages/DealTracker.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/project-tracker" element={<ProjectTracker />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/quarterly-planning" element={<QuarterlyPlanning />} />
        <Route exact path="/help-requests" element={<HelpRequests />} />
        <Route exact path="/bug-tracker" element={<BugTracker />} />
        <Route exact path="/backlog" element={<Backlog />} />
        <Route exact path="/deal-tracker" element={<DealTracker />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;