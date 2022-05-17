import { HeaderContainer, HeaderSection, List, ListItem, Title } from "./style";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <Title>FoodApp</Title>
          <List>
            <ListItem>Restaurantes</ListItem>
            <ListItem>Sobre</ListItem>
          </List>
        </HeaderContainer>
      </HeaderSection>
    </>
  )
}

export default Header;