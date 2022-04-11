import { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ItemPage from "../pages/ItemPage/ItemPage";
import ItemLoader from "../static/ItemLoader";
import Item from "./Item";

const FeedItem = () => {
  const { items, error, loading } = useTypedSelector((state) => state.items);
  const { fetchItems } = useActions();
  const [isItemOpen, setIsItemOpen] = useState<Boolean>(false);

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return (
      <>
        <ItemLoader />
        <ItemLoader />
        <ItemLoader />
      </>
    );
  }

  return (
    <>
      {isItemOpen && <ItemPage setIsItemOpen={setIsItemOpen} />}
      {items.map((item) => (
        <Item key={item.id} item={item} setIsItemOpen={setIsItemOpen} />
      ))}
    </>
  );
};

export default FeedItem;
