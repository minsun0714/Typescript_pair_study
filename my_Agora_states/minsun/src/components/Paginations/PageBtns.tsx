import React from "react";
import styled from "styled-components";

const PageBtnWrapper = styled.div`
  margin: -20px 0 5px;
`;

const PageBtn = styled.button`
  margin: 4px;
  background-color: white;
  border: none;
  height: 30px;
  width: 40px;
  box-shadow: 0px 0px 3px skyblue;
`;

interface IPageBtns {
  itemsPerPage: number;
  totalPages: number;
  onPageChange: (buttonNumber: number) => void;
}

function PageBtns({ itemsPerPage, totalPages, onPageChange }: IPageBtns) {
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
    pages.push(i);
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(Number(event.currentTarget.textContent));
  };

  return (
    <PageBtnWrapper>
      {pages.map((page) => (
        <PageBtn key={page} onClick={onClick}>
          {page}
        </PageBtn>
      ))}
    </PageBtnWrapper>
  );
}

export default PageBtns;
