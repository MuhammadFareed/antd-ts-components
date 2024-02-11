import { DatePickerMode, DatePickerStatus, DatePickerType, FormatType, SelectPlacement } from "@type/index";
import { DatePicker as AppDatePicker } from "antd";
import { ButtonSize } from "antd/es/button";
import React, { CSSProperties, FC, Fragment, ReactNode } from "react";
import type { Dayjs } from "dayjs";
import Text from "src/components/text";

type Props = {
  allowClear?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  className?: string;
  disabled?: boolean;
  inputReadOnly?: boolean;
  mode?: DatePickerMode;
  nextIcon?: ReactNode;
  prevIcon?: ReactNode;
  open?: boolean;
  picker?: DatePickerType;
  placeholder?: string;
  placement?: SelectPlacement;
  popupStyle?: CSSProperties;
  size?: ButtonSize;
  status?: DatePickerStatus;
  style?: CSSProperties;
  suffixIcon?: ReactNode;
  superNextIcon?: ReactNode;
  superPrevIcon?: ReactNode;
  showToday?: boolean;
  value?: Dayjs | null;
  format?: FormatType;
  defaultValue?: Dayjs;
  defaultPickerValue?: Dayjs;
  disabledDate?: (currentDate: Dayjs) => boolean;
  onOpenChange?: (value: boolean) => void;
  onChange?: (date: Dayjs, dateString: string) => void;
  onOk?: () => void;
  onPanelChange?: (value: Dayjs, mode: DatePickerMode) => void;
  error?: string;
};

const DatePicker: FC<Props> = props => {
  const {
    allowClear,
    autoFocus,
    bordered,
    className,
    disabled,
    inputReadOnly,
    mode,
    nextIcon,
    prevIcon,
    open,
    picker,
    placeholder,
    placement,
    popupStyle,
    size,
    status,
    style,
    suffixIcon,
    superNextIcon,
    superPrevIcon,
    showToday,
    value,
    format,
    defaultValue,
    defaultPickerValue,
    onOpenChange,
    disabledDate,
    onChange,
    onOk,
    error,
  } = props;

  const defaultstyle: CSSProperties = {
    width: "100%",
    ...style,
  };

  return (
    <Fragment>
      <AppDatePicker
        allowClear={allowClear}
        autoFocus={autoFocus}
        bordered={bordered}
        className={className}
        disabled={disabled}
        inputReadOnly={inputReadOnly}
        mode={mode}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        open={open}
        picker={picker}
        placeholder={placeholder}
        placement={placement}
        popupStyle={popupStyle}
        size={size}
        status={status}
        style={defaultstyle}
        suffixIcon={suffixIcon}
        superNextIcon={superNextIcon}
        superPrevIcon={superPrevIcon}
        showToday={showToday}
        value={value}
        format={format}
        defaultValue={defaultValue}
        defaultPickerValue={defaultPickerValue}
        onOpenChange={onOpenChange}
        disabledDate={disabledDate}
        onOk={onOk}
        // @ts-ignore
        onChange={onChange}
      />
      {error && (
        <Text className="mt-8" color="RED" size="XS">
          {error}
        </Text>
      )}
    </Fragment>
  );
};

export default DatePicker;
