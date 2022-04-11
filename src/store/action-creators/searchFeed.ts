import axios from "axios";
import { SearchFeedActionTypes } from "../../types/user";

export const getSearchFeed = (query: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: SearchFeedActionTypes.FETCH_FEED_SEARCH,
        action: query,
      });
      const response = await axios.post(
        "https://api.ownvibe.app/product/search?page=0",
        {
          query,
        }
      );
      console.log("api search feed response ", response.data.data);

      dispatch({
        type: SearchFeedActionTypes.FETCH_FEED_SEARCH_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: SearchFeedActionTypes.FETCH_FEED_SEARCH_ERROR,
        payload: "error",
      });
    }
  };
};
