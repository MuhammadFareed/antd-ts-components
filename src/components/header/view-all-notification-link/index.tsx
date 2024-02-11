import React, { FC } from "react";
import styles from "./../styles.module.css";
import Text from "src/components/text";
import Link from "src/components/link";

const ViewAllNotificationLink: FC = () => (
  <div className={styles.text}>
    <Link to={"/notifications"}>
      <Text title="View all notifications" font="SEMIBOLD" color="PINK" size="XS" />
    </Link>
  </div>
);

export default ViewAllNotificationLink;
