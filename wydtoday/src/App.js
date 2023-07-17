import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import WydPage from './pages/WydPage';
import RWydPage from './pages/RWydPage';
import PartyRoomPage from './pages/PartyRoomPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/wydtoday" element={<WydPage/>}/>
        <Route path="/rwydtoday" element={<RWydPage/>}/>
        <Route path="/together" element={<PartyRoomPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
