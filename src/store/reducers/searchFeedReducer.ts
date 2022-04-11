import { ISearchFeedState, SearchFeedActionTypes } from "../../types/user";

const initialState: ISearchFeedState = {
  productList: [],
  loading: true,
};

export const searchFeedReducer = (
  state = initialState,
  action: any
): ISearchFeedState => {
  switch (action.type) {
    case SearchFeedActionTypes.FETCH_FEED_SEARCH:
      return { productList: [], loading: true };
    case SearchFeedActionTypes.FETCH_FEED_SEARCH_SUCCESS:
      return {
        productList: action.payload,
        loading: false,
      };
    case SearchFeedActionTypes.FETCH_FEED_SEARCH_ERROR:
      return { productList: [], loading: true };
    default:
      return state;
  }
};
