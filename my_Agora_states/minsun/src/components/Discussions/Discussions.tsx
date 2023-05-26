import React, { useState } from "react";
import Pagination from "../Paginations/Pagination";
import { useDispatch } from "react-redux";
import { createDiscussion } from "../../store/store";
import { Main, Board, Question, SubmitBtn } from "./DiscussionStyle";

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
        avatarURL: null,
        bodyHTML: null,
        createdAt: JSON.stringify(new Date()),
        id: Date.now(),
        url: null,
        title: discussionTitle,
        updatedAt: null,
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
