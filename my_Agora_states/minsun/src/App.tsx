import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Board = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  border-radius: 20px;
  height: 70px;
  margin: 20px;
`;

function App() {
  type Discussions = {
    answer: {
      author: string;
      avatarURL: string;
      bodyHTML: string;
      createdAt: string;
      id: string;
      url: string;
    };
    author: string;
    avatarURL: string;
    bodyHTML: string;
    createdAt: string;
    id: number;
    url: string;
    title: string;
    updatedAt: string;
  };
  const [discussions, setDiscussions] = useState<Discussions[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/discussions/")
      .then((response) => {
        setDiscussions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <Board>
        <input placeholder='이름을 입력하세요'></input>
        <textarea placeholder='질문을 입력하세요'></textarea>
        <button>제출</button>
      </Board>
      <ul>
        {discussions.map((discussion) => (
          <Card key={discussion.id}>
            <li>
              <span>{discussion.title}</span>
              <br />
              <span>{discussion.author}</span>
            </li>
          </Card>
        ))}
      </ul>
    </main>
  );
}

export default App;
