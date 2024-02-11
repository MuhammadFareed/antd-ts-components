import React, { CSSProperties, FC, ReactNode } from "react";
import { theme } from "src/constant/theme";
import { Switch as AntdSwitch } from "antd";
import type { SwitchSize, SwitchChangeEventHandler, SwitchClickEventHandler } from "antd/es/switch";

type Props = {
  style?: CSSProperties;
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  size?: SwitchSize;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
};

const Switch: FC<Props> = props => {
  const {
    style,
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    loading,
    className,
    size,
    checkedChildren,
    unCheckedChildren,
    onChange,
    onClick,
  } = props;

  const switchStyle: CSSProperties = {
    backgroundColor: checked ? theme.DARK_GREEN : theme.GREY,
    ...style,
  };
  return (
    <AntdSwitch
      style={switchStyle}
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      loading={loading}
      className={className}
      size={size}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Switch;
