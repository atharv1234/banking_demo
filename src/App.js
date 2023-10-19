// import logo from './logo.svg';
import './App.css';
import BankHomePage from "./components/bankhome/BankHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
    <Route path="/bankHome" element={<BankHomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
