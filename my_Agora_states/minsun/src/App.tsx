import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Discussions from "./components/Discussions/Discussions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: beige;
    color: gray;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

function App() {
  return (
    <div>
      <StyledToastContainer autoClose={2500} closeButton={false} />
      <Discussions />;
    </div>
  );
}

export default App;
