import { HeaderContainer, HeaderSection, List, ListItem, Title } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <Title onClick={() => navigate('/')}>FoodApp</Title>
          <List>
            <ListItem onClick={() => navigate('/restaurants')}>Restaurantes</ListItem>
            <ListItem>Sobre</ListItem>
          </List>
        </HeaderContainer>
      </HeaderSection>
    </> 
  )
}

export default Header;