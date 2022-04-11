import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creators/user";
import * as SearchActionCreators from "../store/action-creators/search";
import * as SearchFeedActionCreators from "../store/action-creators/searchFeed";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    Object.assign(
      {},
      UserActionCreators,
      SearchActionCreators,
      SearchFeedActionCreators
    ),
    dispatch
  );
};
