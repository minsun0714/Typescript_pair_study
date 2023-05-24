import styled from "styled-components";

export const PageBtnWrapper = styled.div`
  margin: -20px 0 5px;
`;

export const PageBtn = styled.button`
  margin: 4px;
  background-color: white;
  border: none;
  height: 30px;
  width: 40px;
  box-shadow: 0px 0px 3px skyblue;
`;

export interface IPageBtns {
  itemsPerPage: number;
  totalPages: number;
  onPageChange: (buttonNumber: number) => void;
}

export const Board = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscussionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.li`
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

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  margin-top: 10px;
`;

export const Author = styled.span`
  position: fixed;
  color: gray;
  font-size: 15px;
  margin-top: 37px;
`;

export const UpdateInput = styled.input`
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

export const BtnWrapper = styled(Content)`
  position: sticky;
  right: 0;
  display: flex;
  flex-direction: row;
  margin-left: 560px;
`;

export const Btn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 40px;
  border-radius: 16px;
  background-color: #299ecc;
  padding-right: 8px;
  color: white;
`;
