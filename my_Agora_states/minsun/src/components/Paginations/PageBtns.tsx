import styled from "styled-components";

function PageBtns({ itemsPerPage, totalPages, onPageChange }: any) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
    pages.push(i);
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(Number(event.currentTarget.textContent));
  };

  return (
    <div>
      {pages.map((page) => (
        <button key={page} onClick={onClick}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default PageBtns;