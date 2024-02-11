import React, { FC, CSSProperties, ReactNode, KeyboardEvent, MouseEvent } from "react";
import { Drawer as AntdDrawer } from "antd";
import { DrawerPlacement } from "@type/index";

type Props = {
  bodyStyle?: CSSProperties;
  className?: string;
  closable?: boolean;
  closeIcon?: ReactNode;
  contentWrapperStyle?: CSSProperties;
  destroyOnClose?: boolean;
  footer?: ReactNode;
  footerStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  height?: string | number;
  placement?: DrawerPlacement;
  title?: string | ReactNode;
  open?: boolean;
  width?: number | string;
  zIndex?: number;
  children?: ReactNode;
  onClose?: (e: MouseEvent | KeyboardEvent) => void;
};

const Drawer: FC<Props> = props => {
  const {
    bodyStyle,
    className,
    closable,
    closeIcon,
    contentWrapperStyle,
    destroyOnClose,
    footer,
    footerStyle,
    headerStyle,
    height,
    placement,
    title,
    open,
    width,
    zIndex,
    children = null,
    onClose,
  } = props;

  return (
    <AntdDrawer
      bodyStyle={bodyStyle}
      className={className}
      closable={closable}
      closeIcon={closeIcon}
      contentWrapperStyle={contentWrapperStyle}
      destroyOnClose={destroyOnClose}
      footer={footer}
      footerStyle={footerStyle}
      headerStyle={headerStyle}
      height={height}
      placement={placement}
      title={title}
      open={open}
      zIndex={zIndex}
      onClose={onClose}
      width={width || window?.innerWidth < 350 ? window.innerWidth - 50 : 350}>
      {children}
    </AntdDrawer>
  );
};

export default Drawer;
