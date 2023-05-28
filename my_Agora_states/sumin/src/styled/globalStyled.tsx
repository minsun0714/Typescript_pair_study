import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    border: 0px;
    box-sizing: border-box;
    color: rgb(133,114,104);
}

h1{
    margin-bottom: 20px;
    line-height : 100px;
    font-size: 3rem;
    width: 50%;
    height: 15%;
    text-align: center;
    border-radius: 20px;
    font-family: 'Fugaz One', cursive;
    text-shadow: 7px -5px rgba(255, 191, 174, 0.8);
  }

label {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Fugaz One', cursive;
}

input {
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 15px;
    width: 50%;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    box-shadow: rgba(255, 255, 255, 0.2) 2px 2px 4px 0px inset, 
    rgba(72, 54, 46, 0.2) -2px -2px 4px 1px inset;
    }

`;
export default GlobalStyle;