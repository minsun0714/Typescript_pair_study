import React, { useState, useEffect } from "react";
import axios from "axios";
import PageBtns from "./PageBtns";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createDiscussion } from "../../store/store";

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
  border: 1px solid green;
  border-radius: 20px;
  height: 70px;
  margin: 20px;
  width: 50vw;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vw;
`;
function Pagination() {
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

  type ItemsPerPage = 7 | 10;

  const itemsPerPage: ItemsPerPage = 7;
  const [discussions, setDiscussions] = useState<Discussions[]>([]);
  const [currentItems, setCurrentItems] = useState<Discussions[]>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: Discussions[]) => state);

  useEffect(() => {
    axios
      .get("http://localhost:4000/discussions/")
      .then((response) => {
        setDiscussions(response.data);
        for (let i = response.data.length - 1; i >= 0; i--) {
          dispatch(createDiscussion(response.data[i]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    <DiscussionsWrapper>
      <ul>
        {currentItems.map((discussion) => (
          <Card key={discussion.id}>
            <Img src={discussion.avatarURL} />
            <Content>
              <span>{discussion.title}</span>
              <span>{discussion.author}</span>
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
  );
}
export default Pagination;
