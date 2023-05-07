import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./components/Paginations/Pagination";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Board = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Main>
      <Board>
        <input placeholder='이름을 입력하세요'></input>
        <textarea placeholder='질문을 입력하세요'></textarea>
        <button>제출</button>
      </Board>
      <Pagination />
    </Main>
  );
}

export default App;
