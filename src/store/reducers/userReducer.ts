import { IFeedState, TItemsAction, ItemsActionTypes } from "../../types/user";

const initialState: IFeedState = {
  items: [],
  loading: false,
  error: null,
};

export const itemsReducer = (
  state = initialState,
  action: TItemsAction
): IFeedState => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS:
      return { items: [], loading: true, error: null };
    case ItemsActionTypes.FETCH_ITEMS_SUCCESS:
      return { items: action.payload, loading: false, error: null };
    case ItemsActionTypes.FETCH_ITEMS_ERROR:
      return { items: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
