import DisplayCards from "./Components/DisplayCards/DisplayCards";
import BankHomePage from "./Components/bankhome/BankHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<BankHomePage />} />
        <Route path="/displayCard" element={<DisplayCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
