import styled from 'styled-components';

export const LinkRestaurant = styled.a`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: black;

  img {
    width: 20%;
    margin-right: 3%;
  }
`;

export const RestaurantInfo = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 20px;
    margin-right: 10px;
  }

  p {
    font-size: 16px;
  }
`;