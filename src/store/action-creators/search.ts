import { SearchActionTypes } from "../../types/user";
import axios from "axios";

export const getSearch = (query: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: SearchActionTypes.FETCH_SEARCH, action: query });
      const response = await axios.post("https://api.ownvibe.app/search", {
        query,
      });
      console.log("api response ", response.data.data);

      dispatch({
        type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
        payload: { data: response.data.data, query },
      });
    } catch (e) {
      dispatch({
        type: SearchActionTypes.FETCH_SEARCH_ERROR,
        payload: "error",
      });
    }
  };
};
