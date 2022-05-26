import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Roboto:wght@300;500;700&display=swap'); 
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #ECF0F5;
  }

  li {
    list-style: none;
  }
`;
