import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Discussions = {
  answer: {
    author: string;
    avatarURL: string;
    bodyHTML: string;
    createdAt: string;
    id: number;
    url: string;
  } | null;
  author: string;
  avatarURL: string;
  bodyHTML: string;
  createdAt: string;
  id: number;
  url: string;
  title: string;
  updatedAt: string;
};

const initialDiscussionState: Discussions[] = [];

export const discussion = createSlice({
  name: "discussionReducer",
  initialState: initialDiscussionState,
  reducers: {
    createDiscussion: (
      state: Discussions[],
      action: PayloadAction<Discussions>
    ) => {
      return [action.payload, ...state];
    },
  },
});

export const store = configureStore({ reducer: discussion.reducer });
export const { createDiscussion } = discussion.actions;
