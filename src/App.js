import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./pages/feed/Feed";
// import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Feed />
    </div>
  );
}

{
  /* <div className="Assesment">
  <Sidebar />
  <div className="Assesment_Wrap">
    <Header />
    <div className="Assesment_Feed">
      <Feed />
    </div>
  </div>
</div>; */
}

export default App;
