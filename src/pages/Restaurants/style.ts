import styled from 'styled-components';

export const RestaurantsSection = styled.section`
  padding: 40px 0;
  height: 600px;
`;

export const RestaurantsContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const RestaurantFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  h2 {
    font-size: 18px;
  }

  img {
    width: 25px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
  margin-top: 40px;
`;

export const Background = styled.div`
  background-color: white;
  padding: 15px; 
`;