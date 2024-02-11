import React, { FC, Fragment, useState } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import Modal from "src/components/modal";
import styles from "./styles.module.css";
import DetailedReview from "./detailed-review";
import { ProfileReview } from "@type/index";
import { textLimitForReviewReadMore } from "src/constant";

type Props = {
  review?: ProfileReview;
};

const ReviewCard: FC<Props> = props => {
  const { review } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-100 pb-25">
      {review && (
        <Fragment>
          <Modal open={showModal} onCancel={() => setShowModal(false)} showFooter={false}>
            <DetailedReview review={review} />
          </Modal>
          <div className={styles.reviews_card}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((element: number) => (
                <Fragment key={element}>
                  {element > review?.rating ? (
                    <StarOutlined className={styles.star} />
                  ) : (
                    <StarFilled className={styles.star} />
                  )}
                </Fragment>
              ))}
            </div>
            {review?.review && (
              <p className="mb-15">
                {review?.review?.length <= textLimitForReviewReadMore
                  ? review?.review
                  : review?.review?.slice(0, textLimitForReviewReadMore)}
                {review?.review.length > textLimitForReviewReadMore && (
                  <Fragment>
                    <span>... </span>
                    <span
                      onClick={() => setShowModal(true)}
                      className={["blue text_hover_underline", styles.see_more_link].join(" ")}>
                      <i>See more</i>
                    </span>
                  </Fragment>
                )}
              </p>
            )}
            <p className={styles.parent_name}>- {review?.name || ""}</p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ReviewCard;
