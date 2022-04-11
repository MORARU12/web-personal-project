import React from "react";
import { transform, motion } from "framer-motion";
import ReactPlayer from "react-player";

export default (scale = 1, pageCount = 5) => {
  const range = Array.from(Array(pageCount)).map((_, i) => i);
  const pages = React.useMemo(
    () =>
      range.map((i) => (
        <motion.div
          key={i}
          style={{
            height: 586,
            width: 320,
          }}
          children={
            <div className="react-player">
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
                  },
                }}
                url={
                  "https://videodelivery.net/dd847980982c499f885d6d305172cc60/manifest/video.m3u8"
                }
              />
            </div>
          }
        />
      )),
    [scale, range, pageCount]
  );
  return pages;
};
