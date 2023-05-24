import React from "react";
import { PageBtnWrapper, PageBtn, IPageBtns } from "./PaginationStyle";

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
