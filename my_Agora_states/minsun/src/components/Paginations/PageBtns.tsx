import React from "react";
import styled from "styled-components";

const PageBtn = styled.button`
  margin: 4px;
  background-color: whitesmoke;
  border: none;
  height: 30px;
  width: 40px;
  box-shadow: 0px 0px 3px black;
`;

function PageBtns({
  itemsPerPage,
  totalPages,
  onPageChange,
}: {
  itemsPerPage: number;
  totalPages: number;
  onPageChange: any;
}) {
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
    pages.push(i);
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(Number(event.currentTarget.textContent));
  };

  return (
    <div>
      {pages.map((page) => (
        <PageBtn key={page} onClick={onClick}>
          {page}
        </PageBtn>
      ))}
    </div>
  );
}

export default PageBtns;
