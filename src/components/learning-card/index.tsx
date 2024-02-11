import React, { FC, Fragment, memo, useState } from "react";
import noPackageCoverImage from "src/assets/images/no_cover.png";
import styles from "./styles.module.css";
import { CaretRightOutlined, FilePdfOutlined, LinkOutlined } from "@ant-design/icons";
import Modal from "src/components/modal";
import JWVideoPlayer from "src/components/jw-video-player";
import Text from "src/components/text";
import { TrainingModuleItem } from "@type/index";
import { MEDIA_BASE_URL } from "src/config/api-constants";
import parser from "html-react-parser";

type Props = {
  showTag?: boolean;
  item?: TrainingModuleItem;
};

const LearningCard: FC<Props> = props => {
  const { showTag = false, item } = props;
  const url = `${MEDIA_BASE_URL}${item?.link}`;
  const thumbnail = `${MEDIA_BASE_URL}${item?.thumbnail}`;
  const isVideo = item?.type === "video";
  const isDoc = item?.type === "doc";
  const isLink = item?.type === "link";
  const [showVideo, setShowVideo] = useState<boolean>(false);

  return (
    <Fragment>
      <Modal
        width={isVideo ? 1000 : isDoc ? 1200 : 700}
        destroyOnClose
        open={showVideo}
        showOkButton={false}
        title={`${item?.index}. ${item?.title}`}
        maskClosable={false}
        onCancel={() => setShowVideo(false)}>
        <>
          {isVideo ? (
            <JWVideoPlayer height={450} src={url} image={thumbnail} autoPlay />
          ) : isDoc ? (
            <iframe className={styles.pdf} src={`${url}#toolbar=0`} />
          ) : isLink ? (
            <div>
              <a target="_blank" href={item?.link} rel="noreferrer">
                {item?.link}
              </a>
              <div className={styles.link_transcript}>{parser(item?.transcript || "")}</div>
            </div>
          ) : null}
        </>
      </Modal>
      <div className={styles.learning_card} onClick={() => setShowVideo(true)}>
        <div className={styles.learning_cover}>
          <img src={item?.thumbnail ? thumbnail : noPackageCoverImage} alt="cover" />
          {isVideo || isDoc || isLink ? (
            <div className={styles.play_icon_wrapper}>
              <div className={styles.play_icon_circle}>
                {isVideo ? <CaretRightOutlined /> : isDoc ? <FilePdfOutlined /> : isLink ? <LinkOutlined /> : null}
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.card_body}>
          {showTag && <div className={styles.tag}>Coding</div>}
          <Text className={styles.title} size="S" font="LIGHTER">
            {item?.index}. {item?.title}
          </Text>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(LearningCard);
