import Header from "../../shared/components/Header"
import { Input } from "../../shared/components/Input"
import { RestaurantsSection, RestaurantsContainer, RestaurantFilter, Row, Background } from "./style"
import { Restaurant } from "./Restaurant";

export const Restaurants = () => {

  return (
    <>
      <Header />
      <RestaurantsSection>
        <RestaurantsContainer>
          <RestaurantFilter>
            <h1>Todos os restaurantes</h1>
            <img src="./assets/images/loupe.svg" alt="" />
          </RestaurantFilter>

          <Input placeholder="O que você está procurando?" />

          <Row>
            <Background>
              <Restaurant />
            </Background>
          </Row>

        </RestaurantsContainer>
      </RestaurantsSection>
    </>
  )
}
