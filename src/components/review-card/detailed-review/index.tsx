import React, { FC, Fragment } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "./../styles.module.css";
import { ProfileReview } from "@type/index";

type Props = {
  review: ProfileReview;
};

const DetailedReview: FC<Props> = props => {
  const { review } = props;

  return (
    <div>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((element: number) => (
          <Fragment>
            {element > review?.rating ? (
              <StarOutlined className={styles.star} />
            ) : (
              <StarFilled className={styles.star} />
            )}
          </Fragment>
        ))}
      </div>
      <p className={["mb-12", styles.review_text].join(" ")}>{review?.review || ""}</p>
      <p className={styles.parent_name}>- {review?.name || ""}</p>
    </div>
  );
};

export default DetailedReview;
