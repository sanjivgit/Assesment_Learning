import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Create from "./pages/create/Create";
import Assessment from "./pages/assessment/Assessment";

function App() {
  return (
    <div className="Assesment">
      <Sidebar />
      <div className="Assesment_Wrap">
        <Header />
        {/* /////// Main Container //////////// */}
        <div className="m-3 Main_Container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Assessment />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
