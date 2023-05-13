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
        <textarea
          placeholder='질문을 입력하세요'
          value={discussionTitle}
          onChange={onChangeDiscussionTitle}
        ></textarea>
        <button>제출</button>
      </Board>
      <Pagination />
    </Main>
  );
}
export default Discussions;
