import React from "react";

import { Col, Row, Space } from "antd";

import Modal from "../modal";
import errorImg from "src/assets/notificationSvgs/errorImg.svg";
import successImg from "src/assets/notificationSvgs/success.svg";
import info from "src/assets/notificationSvgs/info.svg";
import { NotificationType, INotificationData } from "src/types/notification";

import styles from "./styles.module.css";

const getImage = (image: string, type?: NotificationType) => {
  if (!image) {
    let svgImage;

    switch (type) {
      case "error":
        svgImage = errorImg;
        break;
      case "success":
        svgImage = successImg;
        break;

      default:
        svgImage = info;
        break;
    }

    return svgImage;
  }

  return image;
};

const getStyle = (type?: NotificationType) => {
  if (type === "error") {
    return styles.error;
  } else if (type === "success") {
    return styles.success;
  } else {
    return styles.info;
  }
};

const ModalComponent = ({
  handleCancel,
  show = false,
  type,
  title,
  successText,
  handleSuccess,
  disableCancel,
  content,
  cancelText,
  image,
  disableClose,
}: INotificationData) => (
  <Modal
    style={{ width: "70%" }}
    onCancel={!disableClose ? handleCancel : () => {}}
    open={show}
    okButtonText={successText}
    onOk={typeof handleSuccess === "function" ? handleSuccess : handleCancel}
    cancelButtonText={cancelText}
    showCancelButton={!disableCancel}
    closable={!disableClose}>
    <Col>
      {title && (
        <Row align={"middle"}>
          <Space size={"middle"}>
            <img src={getImage(image, type)} alt={"modalImg"} />

            <div className={[styles.modalHeader, getStyle(type)].join(" ")}>{title}</div>
          </Space>
        </Row>
      )}

      {content ? (
        !title ? (
          <Row className={"mt-20"}>
            <div className={styles.modalImg}>
              <img src={getImage(image, type)} style={{ width: "100%", height: "100%" }} alt={"modalImg"} />
            </div>

            <div className={styles.content}>{content()}</div>
          </Row>
        ) : (
          content()
        )
      ) : null}
    </Col>
  </Modal>
);

export default ModalComponent;
