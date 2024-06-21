import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/playlist' element={<Playlist />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;