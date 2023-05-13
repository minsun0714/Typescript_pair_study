import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Discussion = {
  answer: {
    author: string;
    avatarURL: string;
    bodyHTML: string;
    createdAt: string;
    id: number;
    url: string;
  } | null;
  author: string;
  avatarURL: string | null;
  bodyHTML: string | null;
  createdAt: string;
  id: number;
  url: string | null;
  title: string;
  updatedAt: string | null;
};

const initialDiscussionState: Discussion[] = [];

export const discussion = createSlice({
  name: "discussionReducer",
  initialState: initialDiscussionState,
  reducers: {
    createDiscussion: (
      state: Discussion[],
      action: PayloadAction<Discussion>
    ) => {
      return [action.payload, ...state];
    },
  },
});

export const store = configureStore({ reducer: discussion.reducer });
export const { createDiscussion } = discussion.actions;
