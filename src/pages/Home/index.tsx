import { HomeContainer, HomeSection, Overlay } from "./style";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/components/Button";
import Header from "../../shared/components/Header";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <HomeSection bg="./assets/images/bg-home.jpg">
        <Overlay></Overlay>
        <HomeContainer>
          <h1>Bem vindo ao FoodApp</h1>
          <h2>Está com fome? Peça e receba em casa</h2>
          <Button
            onClick={() => navigate('/restaurants')}
            buttonName="Ver restaurantes"
            color="#FF6600"
          ></Button>
        </HomeContainer>
      </HomeSection>
    </>
  )
}

export default Home;
