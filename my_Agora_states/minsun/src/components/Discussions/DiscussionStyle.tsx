import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-top: 20px;
`;

export const Board = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  background-image: linear-gradient(to left, gray, silver, gray);
  box-shadow: 30px 60px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 1500px) {
    height: 75vh;
    width: 22vw;
  }
`;

export const Question = styled.textarea`
  font-size: 20px;
  resize: none;
  margin: 10px;
  width: 20vw;
  height: 500px;
`;

export const SubmitBtn = styled.button`
  background-color: yellowgreen;
  color: white;
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 12vw;
  box-shadow: 1px 1px 30px gray;
  font-size: 20px;
  font-weight: 700;
`;
