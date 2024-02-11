import React, { CSSProperties, FunctionComponent, MouseEvent, ReactNode } from "react";
import { Button as AntButton } from "antd";
import styles from "./styles.module.css";
import { ButtonShape, ButtonSize, ButtonType } from "@type/index";

type Props = {
  shape?: ButtonShape;
  size?: ButtonSize;
  type?: ButtonType;
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  icon?: ReactNode;
  loading?: boolean;
  target?: string;
  isForm?: boolean;
  children?: string | ReactNode;
  style?: CSSProperties;
  className?: string;
  stopPropagation?: boolean;
  onClick?: () => void;
};

const Button: FunctionComponent<Props> = props => {
  const {
    block,
    disabled,
    ghost,
    danger,
    href,
    icon,
    loading,
    shape,
    size,
    target,
    isForm,
    children,
    style,
    className,
    type = "primary",
    stopPropagation = true,
    onClick,
  } = props;

  const buttonStyles: CSSProperties = {
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: "14px",
    padding: "5px 17px",
    lineHeight: 1,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => {
    stopPropagation && e?.stopPropagation();
    e?.preventDefault();
    onClick && onClick();
  };

  return (
    <AntButton
      className={[styles[type], className].join(" ")}
      style={buttonStyles}
      onClick={clickHandler}
      htmlType={isForm ? "submit" : "button"}
      ghost={ghost}
      disabled={disabled}
      block={block}
      danger={danger}
      href={href}
      icon={icon}
      loading={loading}
      shape={shape}
      size={size}
      target={target}>
      {children || ""}
    </AntButton>
  );
};

export default Button;
