import React from 'react';
import styled from 'styled-components';
import InputForm from './components/inputForm';
import DiscussionForm from './components/discussions';
import GlobalStyle from 'styled/globalStyled';

const Body = styled.body`
  padding-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(242,239,237);
`

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWapper = styled.section`
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <>
    <GlobalStyle />
      <Body>
        <Header>
          <h1>✦ My Agora States ✦</h1>
        </Header>
        <FormWapper>
          <InputForm />
          <DiscussionForm />
        </FormWapper>
      </Body>
    </>
  );
}

export default App;
