import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/admin";

import Login from "./components/login";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
