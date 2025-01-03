import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  preloadedState: getDataFromLocalStorage(),
});

store.subscribe(() => {
  const state = store.getState();
  setDataInLocalStorage(state);
});

function setDataInLocalStorage(state) {
  try {
    const userState = state.user;
    if (userState) {
      localStorage.setItem("users", JSON.stringify(userState));
    }
  } catch (err) {
    console.error(err);
  }
}

function getDataFromLocalStorage() {
  try {
    const data = localStorage.getItem("users");
    if (data) {
      return { user: JSON.parse(data) };
    }
  } catch (err) {
    console.error(err);
  }
  return { allTasks: [] };
}

export default store;
