import React, { useState, useEffect } from "react";
import axios from "axios";
import PageBtns from "./PageBtns";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createDiscussion, Discussion } from "../../store/store";

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
  height: 70px;
  margin: 20px;
  width: 50vw;
  background-color: #bee7f8;
  box-shadow: 1px 1px 5px gray;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 10px;
`;

const Author = styled.span`
  color: gray;
  font-size: 15px;
  margin-top: -10px;
`;
function Pagination() {
  type ItemsPerPage = 7 | 10;

  const itemsPerPage: ItemsPerPage = 7;
  // const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [currentItems, setCurrentItems] = useState<Discussion[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: Discussion[]) => state);

  useEffect(() => {
    if (state.length === 0) {
      axios
        .get("http://localhost:4000/discussions/")
        .then((response) => {
          // setDiscussions(response.data);
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

  return (
    <Board>
      <DiscussionsWrapper>
        <ul>
          {currentItems.map((discussion) => (
            <Card key={discussion.id}>
              <Content>
                <Title>{discussion.title}</Title>
                <Author>{discussion.author}</Author>
              </Content>
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
