export interface IFeedState {
  items: any[];
  loading: boolean;
  error: null | string;
}

export interface ISearchState {
  type?: string; // hashtag | word
  search?: string;
  productList?: any;
  query?: string;
  page?: number;
  loadedAll?: boolean;
  loading?: boolean;
  hashtags?: any[]; // hashtag, productsCount
  productsCount?: number;
  users?: any[];
}

export interface ISearchFeedState {
  productList: any[];
  loading: boolean;
}

export enum ItemsActionTypes {
  FETCH_ITEMS = "FETCH_ITEMS",
  FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS",
  FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR",
}

export enum SearchActionTypes {
  FETCH_SEARCH = "FETCH_SEARCH",
  FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS",
  FETCH_SEARCH_ERROR = "FETCH_SEARCH_ERROR",
}

export enum SearchFeedActionTypes {
  FETCH_FEED_SEARCH = "FETCH_FEED_SEARCH",
  FETCH_FEED_SEARCH_SUCCESS = "FETCH_FEED_SEARCH_SUCCESS",
  FETCH_FEED_SEARCH_ERROR = "FETCH_FEED_SEARCH_ERROR",
}

interface IFetchItemsAction {
  type: ItemsActionTypes.FETCH_ITEMS;
}

interface IFetchItemsSuccessAction {
  type: ItemsActionTypes.FETCH_ITEMS_SUCCESS;
  payload: any[];
}

interface IFetchItemsErrorAction {
  type: ItemsActionTypes.FETCH_ITEMS_ERROR;
  payload: string;
}

export type TItemsAction =
  | IFetchItemsAction
  | IFetchItemsSuccessAction
  | IFetchItemsErrorAction;
