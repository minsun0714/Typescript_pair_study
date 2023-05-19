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

const initialDiscussionStateLocalStorage: Discussion[] = [];

for (let key in localStorage) {
  const value = localStorage.getItem(key);
  if (value) {
    const parsedValue = JSON.parse(value);
    if (parsedValue.author) {
      initialDiscussionStateLocalStorage.push(parsedValue);
    }
  }
}

initialDiscussionStateLocalStorage.sort((a, b) => b.id - a.id);

export const discussion = createSlice({
  name: "discussionReducer",
  initialState: initialDiscussionStateLocalStorage,
  reducers: {
    createDiscussion: (
      state: Discussion[],
      action: PayloadAction<Discussion>
    ) => {
      localStorage.setItem(
        String(action.payload.id),
        JSON.stringify(action.payload)
      );
      return [action.payload, ...state];
    },
    deleteDiscussion: (
      state: Discussion[],
      action: PayloadAction<Discussion>
    ) => {
      localStorage.removeItem(String(action.payload.id));
      return state.filter((item: Discussion) => item.id !== action.payload.id);
    },
    updateDiscussion: (
      state: Discussion[],
      action: PayloadAction<Discussion>
    ) => {
      localStorage.removeItem(String(action.payload.id));
      localStorage.setItem(
        String(action.payload.id),
        JSON.stringify(action.payload)
      );

      const targetDiscussion = state.find(
        (discussion: Discussion) => discussion.id === action.payload.id
      );

      return state.map((discussion: Discussion) =>
        discussion.id === action.payload.id
          ? { ...discussion, title: action.payload.title }
          : discussion
      );
    },
  },
});

export const store = configureStore({ reducer: discussion.reducer });
export const { createDiscussion, deleteDiscussion, updateDiscussion } =
  discussion.actions;
