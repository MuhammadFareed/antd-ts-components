import React, { FC } from "react";
import styles from "./../styles.module.css";
import bell from "src/assets/svgs/bell.svg";
import Text from "src/components/text";
import { Space } from "antd";

const NotificationMenuItem: FC = () => (
  <Space className={styles.notification} size={"middle"}>
    <img src={bell} className={styles.total_packages_icon} alt="" />
    <Text
      title="Announcement: January payment has been transferred"
      font="LIGHTER"
      color="BLACK"
      lHeight="S"
      size="S"
    />
  </Space>
);

export default NotificationMenuItem;
