import { Outlet } from "react-router-dom"
import Header from "../../shared/components/Header"
import { RestaurantData } from "./RestaurantData"
import { RestaurantsDetailContainer, RestaurantsDetailSection } from "./style"

export const RestaurantDetail = () => {
  return (
    <>
      <Header />
      <RestaurantsDetailSection>
        <RestaurantsDetailContainer>
          <RestaurantData />
          <Outlet />
        </RestaurantsDetailContainer>
      </RestaurantsDetailSection>
    </>
  )
}