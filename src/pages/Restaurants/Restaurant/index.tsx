import { LinkRestaurant, Rating, RestaurantInfo } from "./style"

export const Restaurant = () => {
  return (
    <>
      <LinkRestaurant>
        <img src="./assets/images/foods/bread.png" alt="" />
        <RestaurantInfo>
          <h3>BREAD AND BAKERY</h3>
          <p>Padaria</p>
          <p>25m</p>
        </RestaurantInfo>
        <Rating>
          <img src="./assets/images/star.svg" alt="" />
          <p>4.9</p>
        </Rating>
      </LinkRestaurant>
    </>
  )
}
