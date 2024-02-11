import React, { CSSProperties, FunctionComponent, ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";
import { MenuProps, Space } from "antd";
import { Dropdown as AntDropdown } from "antd";
import styles from "./styles.module.css";
import { DropdownPlacement } from "@type/index";

type Props = {
  title?: ReactNode;
  showDefaultRightIcon?: boolean;
  arrow?: boolean;
  autoAdjustOverflow?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  destroyPopupOnHide?: boolean;
  menuItems?: MenuProps["items"];
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  placement?: DropdownPlacement;
  rightIcon?: ReactNode;
};

const Dropdown: FunctionComponent<Props> = props => {
  const {
    title = "",
    menuItems,
    rightIcon,
    showDefaultRightIcon = true,
    arrow,
    autoAdjustOverflow,
    autoFocus,
    disabled,
    destroyPopupOnHide,
    overlayClassName,
    overlayStyle,
    placement,
  } = props;

  return (
    <AntDropdown
      menu={{ items: menuItems }}
      arrow={arrow}
      autoAdjustOverflow={autoAdjustOverflow}
      autoFocus={autoFocus}
      disabled={disabled}
      destroyPopupOnHide={destroyPopupOnHide}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      placement={placement}>
      <Space className="cursor-pointer">
        {title}
        {showDefaultRightIcon ? <DownOutlined className={styles.right_icon} /> : rightIcon && rightIcon}
      </Space>
    </AntDropdown>
  );
};

export default Dropdown;
