import { ISearchState, SearchActionTypes } from "../../types/user";

const initialState: ISearchState = {
  query: "",
  loading: false,
  type: "",
  productsCount: 0,
  users: [],
  hashtags: [],
};

export const searchReducer = (
  state = initialState,
  action: any
): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH:
      return { loading: true };
    case SearchActionTypes.FETCH_SEARCH_SUCCESS:
      if (action.payload.query.charAt(0) === "#") {
        const { data, query } = action.payload;
        console.log("inside reducer ", data);
        return {
          hashtags: data,
          loading: false,
          query,
        };
      } else {
        const {
          data: { productsCount, users },
          query,
        } = action.payload;
        return {
          productsCount,
          users,
          loading: false,
          query,
        };
      }
    case SearchActionTypes.FETCH_SEARCH_ERROR:
      return { loading: false };
    default:
      return state;
  }
};
