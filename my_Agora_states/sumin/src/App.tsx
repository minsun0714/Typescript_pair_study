import React from 'react';
import styled from 'styled-components';
import InputForm from './components/inputForm';
import DiscussionForm from './components/discussions';

const Body = styled.body`
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  width: 100%;
`

const FormWapper = styled.section`
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <>
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
