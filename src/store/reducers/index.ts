import { combineReducers } from "redux";
import { searchFeedReducer } from "./searchFeedReducer";
import { searchReducer } from "./searchReducer";
import { itemsReducer } from "./userReducer";

export const rootReducer = combineReducers({
  items: itemsReducer,
  search: searchReducer,
  searchFeed: searchFeedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
