import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../Paginations/Pagination";
import { useDispatch } from "react-redux";
import { createDiscussion } from "../../store/store";

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
  padding: 50px;
  border-radius: 20px;
  background-image: linear-gradient(to left, gray, silver, gray);
  box-shadow: 30px 60px 10px rgba(0, 0, 0, 0.2);
`;

const Question = styled.textarea`
  font-size: 20px;
  resize: none;
  margin: 10px;
  width: 20vw;
  height: 500px;
`;

const SubmitBtn = styled.button`
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

type Discussions = {
  answer: {
    author: string;
    avatarURL: string;
    bodyHTML: string;
    createdAt: string;
    id: string;
    url: string;
  } | null;
  author: string;
  avatarURL: string;
  bodyHTML: string;
  createdAt: string;
  id: number;
  url: string;
  title: string;
  updatedAt: string;
};

function Discussions() {
  const [userName, setUserName] = useState("");
  const [discussionTitle, setDiscussionTitle] = useState("");
  const dispatch = useDispatch();

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const onChangeDiscussionTitle = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDiscussionTitle(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName.length === 0 || discussionTitle.length === 0) return;
    dispatch(
      createDiscussion({
        answer: null,
        author: userName,
        avatarURL:
          "https://velog.velcdn.com/images/jasmine0714/post/c2872cf3-d1a1-4f86-8a25-cce9311f1022/image.png",
        bodyHTML: "hi",
        createdAt: "hi",
        id: Date.now(),
        url: "hi",
        title: discussionTitle,
        updatedAt: "hi",
      })
    );
    setUserName("");
    setDiscussionTitle("");
  };

  return (
    <Main>
      <Board onSubmit={onSubmit}>
        <input
          placeholder='이름을 입력하세요'
          value={userName}
          onChange={onChangeUserName}
        ></input>
        <Question
          placeholder='질문을 입력하세요'
          value={discussionTitle}
          onChange={onChangeDiscussionTitle}
        ></Question>
        <SubmitBtn>등록</SubmitBtn>
      </Board>
      <Pagination />
    </Main>
  );
}
export default Discussions;
