import { TItemsAction, ItemsActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchItems = () => {
  return async (dispatch: Dispatch<TItemsAction>) => {
    try {
      dispatch({ type: ItemsActionTypes.FETCH_ITEMS });
      const response = await axios.get(
        "https://api.ownvibe.app/product/explore?page=0&seed=444&startDate=2022-04-6&fbclid=IwAR12EmYP36DZkfS5cjpuArZ37dUrG2wmOeTZJ028YdvUYij43-itKEvLdOI"
      );
      const slicedArray = response.data.data.slice(0, 3);
      setTimeout(() => {
        dispatch({
          type: ItemsActionTypes.FETCH_ITEMS_SUCCESS,
          payload: slicedArray,
        });
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        dispatch({
          type: ItemsActionTypes.FETCH_ITEMS_ERROR,
          payload: "error",
        });
      }, 500);
    }
  };
};
