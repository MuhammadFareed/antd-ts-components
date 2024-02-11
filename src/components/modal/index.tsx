import React, { CSSProperties, FC, ReactNode } from "react";
import { Modal as AntdModal, Row, Space } from "antd";
import styles from "./styles.module.css";
import Button from "src/components/button";
import { ButtonType } from "@type/index";
import Text from "src/components/text";

type Props = {
  bodyStyle?: CSSProperties;
  centered?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  confirmLoading?: boolean;
  destroyOnClose?: boolean;
  focusTriggerAfterClose?: boolean;
  forceRender?: boolean;
  keyboard?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: CSSProperties;
  style?: CSSProperties;
  title?: ReactNode;
  open?: boolean;
  width?: string | number;
  wrapClassName?: string;
  zIndex?: number;
  children?: ReactNode;
  showFooter?: boolean;
  cancelButtonType?: ButtonType;
  okButtonType?: ButtonType;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  cancelButtonText?: string;
  okButtonText?: string;
  okButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  cancelButtonLoading?: boolean;
  okButtonLoading?: boolean;
  onOk?: () => void;
  handleModalCancel?: () => void;
  onCancel?: () => void;
  afterClose?: () => void;
  svg?: any;
};

const Modal: FC<Props> = props => {
  const {
    bodyStyle,
    centered = true,
    closable,
    closeIcon,
    confirmLoading,
    destroyOnClose,
    focusTriggerAfterClose,
    forceRender,
    keyboard,
    mask,
    maskClosable = true,
    maskStyle,
    style,
    title,
    open,
    width,
    wrapClassName,
    zIndex,
    children,
    showFooter = true,
    cancelButtonType = "quaternary",
    okButtonType = "tertiary",
    showCancelButton = true,
    showOkButton = true,
    cancelButtonText,
    okButtonText,
    okButtonDisabled,
    cancelButtonDisabled,
    cancelButtonLoading,
    okButtonLoading,
    onOk,
    svg,
    onCancel,
    handleModalCancel,
    afterClose,
  } = props;

  return (
    <AntdModal
      bodyStyle={bodyStyle}
      centered={centered}
      closable={closable}
      closeIcon={closeIcon}
      confirmLoading={confirmLoading}
      destroyOnClose={destroyOnClose}
      focusTriggerAfterClose={focusTriggerAfterClose}
      forceRender={forceRender}
      keyboard={keyboard}
      footer={null}
      mask={mask}
      maskClosable={maskClosable}
      maskStyle={maskStyle}
      style={style}
      open={open}
      width={width}
      wrapClassName={wrapClassName}
      zIndex={zIndex}
      onOk={onOk}
      onCancel={handleModalCancel || onCancel}
      afterClose={afterClose}>
      <div>
        {title && (
          <div className={styles.custom_modal_header}>
            <Row align={"middle"}>
              <Space size={"middle"}>
                {svg ? <img src={svg} /> : null}
                <Text font="SEMIBOLD" size="M">
                  {title}
                </Text>
              </Space>
            </Row>
          </div>
        )}
        {children && <div className={styles.custom_modal_body}>{children}</div>}
        {showFooter && (
          <div className={styles.custom_modal_footer}>
            <Space>
              {showCancelButton && (
                <Button
                  disabled={cancelButtonDisabled}
                  loading={cancelButtonLoading}
                  onClick={() => onCancel && onCancel()}
                  type={cancelButtonType}>
                  {cancelButtonText || "Cancel"}
                </Button>
              )}
              {showOkButton && (
                <Button
                  disabled={okButtonDisabled}
                  loading={okButtonLoading}
                  onClick={() => onOk && onOk()}
                  type={okButtonType}>
                  {okButtonText || "Ok"}
                </Button>
              )}
            </Space>
          </div>
        )}
      </div>
    </AntdModal>
  );
};

export default Modal;
