const Item = (props: any) => {
  const { item, setIsItemOpen } = props;
  return (
    <div className="item" key={item.id} onClick={() => setIsItemOpen(true)}>
      <img
        src={`https://cdn.ownvibe.app/live/product/${item.id}/videoThumbnail.jpg`}
        alt=""
      />
      <div className="play-icon"></div>
      <div className="shadows">
        <section className="shadow"></section>
        <section className="shadow shadow-bottom"></section>
      </div>
      <section className="item-info">
        <img
          src={
            item.user.profileImageName === "DefaultProfile.png"
              ? "https://cdn.ownvibe.app/live/user/profileImage/DefaultProfile.png"
              : `https://cdn.ownvibe.app/live/user/profileImage/${item.user.id}/xs/${item.user.profileImageName}`
          }
          alt=""
        />
        <p>
          {item.price} {item.currency}
        </p>
      </section>
    </div>
  );
};

export default Item;
