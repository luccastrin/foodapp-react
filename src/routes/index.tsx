import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { RestaurantDetail } from "../pages/RestaurantDetails";
import { RestaurantEvaluation } from "../pages/RestaurantDetails/RestaurantEvaluation";
import { RestaurantMenu } from "../pages/RestaurantDetails/RestaurantMenu";
import { Restaurants } from "../pages/Restaurants";

export const RoutesPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="restaurant-details/:id" element={<RestaurantDetail />} >
          <Route path="menu" element={<RestaurantMenu />} />
          <Route path="evaluation" element={<RestaurantEvaluation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}