import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Create from "./pages/create/Create";
import Feed from "./pages/feed/Feed";

function App() {
  return (
    <div className="Assesment">
      <Sidebar />
      <div className="Assesment_Wrap">
        <Header />
        {/* /////// Main Container //////////// */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
