import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createDiscussion } from "../store/store";
import { Discussion } from "../store/store";

export default function useFetch() {
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
}
