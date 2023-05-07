import React, { useState, useEffect } from "react";
import axios from "axios";
import PageBtns from "./PageBtns";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  border-radius: 20px;
  height: 70px;
  margin: 20px;
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

  useEffect(() => {
    axios
      .get("http://localhost:4000/discussions/")
      .then((response) => {
        setDiscussions(response.data);
        setCurrentItems(discussions.slice(0, itemsPerPage));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePageChange = (page: number) => {
    const indexOfLastItem: number = page * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    setCurrentItems(discussions.slice(indexOfFirstItem, indexOfLastItem));
  };

  useEffect(() => {
    setCurrentItems(discussions.slice(0, itemsPerPage));
  }, [discussions]);

  return (
    <div>
      <ul>
        {currentItems.map((discussion) => (
          <Card key={discussion.id}>
            <li>
              <span>{discussion.title}</span>
              <br />
              <span>{discussion.author}</span>
            </li>
          </Card>
        ))}
      </ul>
      <PageBtns
        itemsPerPage={itemsPerPage}
        totalPages={discussions.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default Pagination;
