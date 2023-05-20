import React, { useState, useEffect } from "react";
import axios from "axios";
import PageBtns from "./PageBtns";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  createDiscussion,
  deleteDiscussion,
  updateDiscussion,
  Discussion,
} from "../../store/store";

const Board = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscussionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 100px;
  margin: 20px;
  width: 50vw;
  background-color: #bee7f8;
  box-shadow: 1px 1px 5px gray;
  text-align: center;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin-top: 10px;
`;

const Author = styled.span`
  position: fixed;
  color: gray;
  font-size: 15px;
  margin-top: 37px;
`;

const UpdateInput = styled.input`
  margin-bottom: 24px;
  margin-top: 5px;
  text-align: center;
  border: none;
  background-color: #bee7f8;
  font-size: large;
  width: 680px;
  border-radius: 5px;
  outline: none;
  color: rgba(0, 0, 0, 0.5);
`;

const BtnWrapper = styled(Content)`
  position: sticky;
  right: 0;
  display: flex;
  flex-direction: row;
  margin-left: 560px;
`;

const Btn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 40px;
  border-radius: 16px;
  background-color: #299ecc;
  padding-right: 8px;
  color: white;
`;

function Pagination() {
  type ItemsPerPage = 4 | 5;

  const itemsPerPage: ItemsPerPage = 4;
  const [currentItems, setCurrentItems] = useState<Discussion[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: Discussion[]) => state);

  useEffect(() => {
    if (state.length === 0) {
      axios
        .get("http://localhost:4000/discussions/")
        .then((response) => {
          for (let i = response.data.length - 1; i >= 0; i--) {
            dispatch(createDiscussion(response.data[i]));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handlePageChange = (page: number) => {
    const indexOfLastItem: number = page * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    setCurrentItems(state.slice(indexOfFirstItem, indexOfLastItem));
  };

  useEffect(() => {
    setCurrentItems(state.slice(0, itemsPerPage));
  }, [state]);

  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState(false);
  const [targetId, setTargetId] = useState(0);
  const [updatedContent, setUpdatedContent] = useState("");

  const onChangeUpdatedContent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedContent(event.currentTarget.value);
  };

  const handleUpdate = (id: number, title: string) => {
    if (!isUpdateBtnClicked) {
      setIsUpdateBtnClicked(true);
      setTargetId(id);
      setUpdatedContent(title);
      return;
    }

    const discussionToUpdate: Discussion | undefined = state.find(
      (discussion: Discussion) => discussion.id === id
    );

    if (id !== targetId) {
      setIsUpdateBtnClicked(false);
      return;
    }

    if (discussionToUpdate) {
      const payload = { ...discussionToUpdate, title: updatedContent };
      dispatch(updateDiscussion(payload));
    }
    setIsUpdateBtnClicked(false);
  };

  const handleDelete = (id: number) => {
    if (isUpdateBtnClicked) {
      setIsUpdateBtnClicked(false);
      return;
    }
    const targetItem: Discussion | undefined = state.find(
      (item: Discussion) => item.id === id
    );
    if (targetItem) dispatch(deleteDiscussion(targetItem));
  };

  return (
    <Board>
      <DiscussionsWrapper>
        <ul>
          {currentItems.map((discussion) => (
            <Card key={discussion.id}>
              {isUpdateBtnClicked && discussion.id === targetId ? (
                <Content>
                  <UpdateInput
                    autoFocus
                    placeholder='수정할 내용을 입력해주세요'
                    value={updatedContent}
                    onChange={onChangeUpdatedContent}
                  ></UpdateInput>
                  <Author>{discussion.author}</Author>
                </Content>
              ) : (
                <Content>
                  <Title>
                    {discussion.title.length > 40
                      ? discussion.title.slice(0, 40) + "..."
                      : discussion.title}
                  </Title>
                  <Author>{discussion.author}</Author>
                </Content>
              )}
              <BtnWrapper>
                <Btn
                  onClick={() => handleUpdate(discussion.id, discussion.title)}
                >
                  {isUpdateBtnClicked && discussion.id === targetId
                    ? "완료"
                    : "수정"}
                </Btn>
                <Btn onClick={() => handleDelete(discussion.id)}>
                  {isUpdateBtnClicked && discussion.id === targetId
                    ? "취소"
                    : "삭제"}
                </Btn>
              </BtnWrapper>
            </Card>
          ))}
        </ul>
        <PageBtns
          itemsPerPage={itemsPerPage}
          totalPages={state.length}
          onPageChange={handlePageChange}
        />
      </DiscussionsWrapper>
    </Board>
  );
}

export default Pagination;
