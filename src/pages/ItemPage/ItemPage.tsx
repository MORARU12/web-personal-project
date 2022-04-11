import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import { Page } from "../../components/Page";
import useOutsideTrigger from "../../hooks/outsideTrigger";
import usePages from "../../hooks/usePages";

// setIsItemOpen

const ItemPage = (props: any) => {
  const pages = usePages();
  const [currentPage, setCurrentPage] = useState(0);
  const wrapperRef = useRef(null);

  useOutsideTrigger(wrapperRef, () => {});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return ReactDOM.createPortal(
    <div ref={wrapperRef}>
      <div className="modal">
        <div className="modal-item-placeholder">
          <section className="absolute-icons">
            <button
              className="close"
              onClick={() => props.setIsItemOpen(false)}
            ></button>
            <div className="move-btns">
              <button
                className="top"
                onClick={() => {
                  if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              ></button>
              <button
                className="bottom"
                onClick={() => {
                  if (currentPage < pages.length - 1) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              ></button>
            </div>
            <div style={{ width: "56px", height: "56px" }}></div>
          </section>
          <div className="modal-items-scroll">
            <div className="modal-item">
              <Page
                direction="vertical"
                currentPage={currentPage}
                onChangePage={(index) => {
                  setCurrentPage(index);
                }}
              >
                {pages}
              </Page>
              {/* {pages} */}
              {/* <div className="react-player">
                <ReactPlayer
                  className="react-player-v"
                  width="100%"
                  height="100%"
                  loop={true}
                  controls={false}
                  playing={true}
                  config={{
                    file: {
                      attributes: { preload: "auto" },
                      // forceAudio: true,
                    },
                  }}
                  url={
                    "https://videodelivery.net/dd847980982c499f885d6d305172cc60/manifest/video.m3u8"
                  }
                />
              </div> */}
              {/* <img
            className="item-img"
            src="https://cdn.ownvibe.app/live/product/70/videoThumbnail.jpg"
            alt=""
          /> */}
              <section className="bottom-info-and-icons">
                <div className="item-info">
                  <div className="item-profile-img">
                    <img
                      src="https://cdn.ownvibe.app/live/user/profileImage/22/sm/22.jpg?v=1638142286"
                      alt=""
                    />
                  </div>
                  <p className="nickname">nickname</p>
                  <p className="item-description">item description</p>
                  <p className="views-number">
                    <span>836</span> views
                  </p>
                </div>

                <div className="item-icons">
                  <div className="like-icon">
                    <p>45k</p>
                  </div>
                  <div className="save-icon"></div>
                  <div className="comment-icon"></div>
                  <div className="sound-icon"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("item-modal")!
  );
};

export default ItemPage;
