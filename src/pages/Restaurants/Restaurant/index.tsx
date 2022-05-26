import { LinkRestaurant, Rating, RestaurantInfo } from "./style";
import { IRestaurants } from "../../../models/restaurants.model";

interface RestaurantProps {
  restaurant: IRestaurants
}

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <>
      <LinkRestaurant>
        <img src={ restaurant.imagePath } alt="" />
        <RestaurantInfo>
          <h3>{ restaurant.name }</h3>
          <p>{ restaurant.category }</p>
          <p>{ restaurant.deliveryEstimate }</p>
        </RestaurantInfo>
        <Rating>
          <img src="./assets/images/star.svg" alt="" />
          <p>{ restaurant.rating }</p>
        </Rating>
      </LinkRestaurant>
    </>
  )
}
