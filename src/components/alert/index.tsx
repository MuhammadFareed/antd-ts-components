import React, { FC, MouseEvent, ReactNode } from "react";
import { Alert } from "antd";
import { AlertType } from "@type/index";

type Props = {
  action?: ReactNode;
  banner?: boolean;
  closable?: boolean;
  closeText?: ReactNode;
  closeIcon?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  message?: ReactNode;
  showIcon?: boolean;
  type?: AlertType;
  afterClose?: () => void;
  onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const AppAlert: FC<Props> = props => {
  const {
    action,
    banner,
    closable,
    closeText,
    closeIcon,
    description,
    icon,
    message,
    showIcon,
    type,
    afterClose,
    onClose,
  } = props;

  return (
    <Alert
      action={action}
      banner={banner}
      closable={closable}
      closeText={closeText}
      closeIcon={closeIcon}
      description={description}
      icon={icon}
      message={message}
      showIcon={showIcon}
      type={type}
      afterClose={afterClose}
      onClose={onClose}
    />
  );
};

export default AppAlert;
