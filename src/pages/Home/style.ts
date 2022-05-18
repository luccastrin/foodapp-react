import styled from 'styled-components';

interface BgColor {
  bg: string
}

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5); 
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const HomeContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  top: 0;
  left: 0;

  h1 {
    font-size: 52px;
    letter-spacing: 10px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  
  h2 {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 50px;
  }
`;

export const HomeSection = styled.section<BgColor>`
  position: relative;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 0;
  color: white;
  height: 600px;
`;

