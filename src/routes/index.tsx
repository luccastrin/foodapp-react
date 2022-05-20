import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { Restaurants } from "../pages/Restaurants";

export const RoutesPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  )
}