import { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { Input } from "../../shared/components/Input";
import { RestaurantsSection, RestaurantsContainer, RestaurantFilter, Row, Background } from "./style";
import { api } from "../../services/api";
import { IRestaurants } from '../../models/restaurants.model';
import { Restaurant } from "./Restaurant";
import { AxiosResponse } from "axios";

export const Restaurants = () => {
  let [restaurants, setRestaurants] = useState<IRestaurants[]>([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await api.get<IRestaurants[]>('/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.log(error)
    }
  }

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
            {
              restaurants.map((restaurant, index) => (
                <Background key={ index }>
                  <Restaurant restaurant={ restaurant }/>
                </Background>
              ))
            }
          </Row>
        </RestaurantsContainer>
      </RestaurantsSection>
    </>
  )
}
