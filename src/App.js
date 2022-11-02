import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientPortal from "./pages/ClientPortal";
import Home from "./pages/Home";
import CourseTracker from "./pages/CourseTracker";
import Portfolio from "./pages/Portfolio";
import InstagramClone from "./pages/InstagramClone";
import ChatApp from "./pages/ChatApp";
import BookApp from "./pages/BookApp";
import Deliveroo from "./pages/Deliveroo";
import InstaClone from "./pages/InstaClone";
import InshortClone from "./pages/InshortClone";
import SignalClone from "./pages/SignalClone";
import SpotifyClone from "./pages/SpotifyClone";
import EcommerceAdmin from "./pages/EcommerceAdmin";
import EcommerceClient from "./pages/EcommerceClient";


function App() {
  return (
    <div>
      <Router>
        <SideBar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/clientportal" element={<ClientPortal />} />
            <Route path="/coursetracker" element={<CourseTracker />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/instagramclone" element={<InstagramClone />} />
            <Route path="/chatapp" element={<ChatApp />} />
            <Route path="/bookapp" element={<BookApp />} />
            <Route path="/deliveroo" element={<Deliveroo />} />
            <Route path="/instaclone" element={<InstaClone />} />
            <Route path="/inshortclone" element={<InshortClone />} />
            <Route path="/signalclone" element={<SignalClone />} />
            <Route path="/spotifyclone" element={<SpotifyClone />} />
            <Route path="/ecommerce/admin" element={<EcommerceAdmin />} />
            <Route path="/ecommerce/client" element={<EcommerceClient />} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;