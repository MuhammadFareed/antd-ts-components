// @ts-ignore
import JWPlayer from "@jwplayer/jwplayer-react";
import React, { FC, memo } from "react";
import styles from "./styles.module.css";

type Props = {
  height?: number;
  src?: string;
  image?: string;
  title?: string;
  autoPlay?: boolean;
};

const JWVideoPlayer: FC<Props> = props => {
  const { height, src, image, title = "", autoPlay = false } = props;
  const playlistItem = {
    title,
    file: src,
    image: image,
  };

  const config = {
    autostart: autoPlay,
    playsinline: true,
    width: "auto",
    height: height ? height : window?.innerWidth < 991 ? 250 : 350,
    playlist: [playlistItem],
  };
  return (
    <div className={styles.video_box}>
      <JWPlayer config={config} library={"https://cdn.jwplayer.com/libraries/WBUdto55.js"} />
    </div>
  );
};

export default memo(JWVideoPlayer);
