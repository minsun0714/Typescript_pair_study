import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

export type ToastAction = "add" | "delete" | "update";

export type ToastMsg =
  | "질문이 추가되었습니다."
  | "질문이 수정되었습니다."
  | "질문이 삭제되었습니다.";

const addMsg: ToastMsg = "질문이 추가되었습니다.";
const updateMsg: ToastMsg = "질문이 수정되었습니다.";
const deleteMsg: ToastMsg = "질문이 삭제되었습니다.";

const tostify = (actionType: ToastAction) =>
  toast(
    actionType === "add"
      ? addMsg
      : actionType === "update"
      ? updateMsg
      : deleteMsg,
    { position: toast.POSITION.TOP_RIGHT }
  );

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

      tostify("add");

      return [action.payload, ...state];
    },
    deleteDiscussion: (
      state: Discussion[],
      action: PayloadAction<Discussion>
    ) => {
      localStorage.removeItem(String(action.payload.id));

      tostify("delete");

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

      tostify("update");

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
