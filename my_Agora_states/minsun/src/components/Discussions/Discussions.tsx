import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../Paginations/Pagination";
import { useDispatch, useSelector } from "react-redux";
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
`;

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

function Discussions() {
  const [userName, setUserName] = useState("");
  const [discussionTitle, setDiscussionTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setUserName(event.currentTarget.value);
  };

  const onChangeDiscussionTitle = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event.currentTarget.value);
    setDiscussionTitle(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      createDiscussion({
        answer: {
          author: userName,
          avatarURL: "hi",
          bodyHTML: "hi",
          createdAt: "hi",
          id: Date.now(),
          url: "hi",
        },
        author: userName,
        avatarURL: "hi",
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
          onChange={onChangeUserName}
        ></input>
        <textarea
          placeholder='질문을 입력하세요'
          onChange={onChangeDiscussionTitle}
        ></textarea>
        <button>제출</button>
      </Board>
      <Pagination />
    </Main>
  );
}
export default Discussions;
