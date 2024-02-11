import React, {
  CSSProperties,
  // ChangeEvent,
  FocusEvent,
  Fragment,
  FunctionComponent,
  KeyboardEvent,
  ReactNode,
  Ref,
} from "react";
import { Input, InputRef } from "antd";
import Text from "src/components/text";

type Props = {
  value?: string | number | readonly string[];
  ref?: Ref<InputRef>;
  placeholder?: string;
  required?: boolean;
  allowClear?: boolean;
  className?: string;
  disabled?: boolean;
  multiline?: boolean;
  secure?: boolean;
  rows?: number;
  suffix?: ReactNode;
  prefix?: ReactNode;
  maxLength?: number;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  bordered?: boolean;
  showCount?:
    | boolean
    | {
        formatter: (info: { value: string; count: number; maxLength?: number }) => ReactNode;
      };
  status?: "error" | "warning";
  size?: "large" | "middle" | "small";
  autoSize?: boolean | object;
  type?: string;
  style?: CSSProperties;
  name?: string;
  error?: string;
  limit?: number;
  onChange?: (value: any) => void;
  onFocus?: (value?: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (value?: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPressEnter?: (e?: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>) => void;
};

const TextInput: FunctionComponent<Props> = props => {
  const {
    value,
    ref,
    placeholder,
    required,
    allowClear,
    className,
    disabled,
    multiline,
    secure,
    rows,
    prefix,
    suffix,
    maxLength,
    addonAfter,
    addonBefore,
    bordered,
    showCount,
    status,
    size = "middle",
    autoSize,
    type,
    style,
    name,
    error,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    limit,
  } = props;

  const customStyle: CSSProperties = {
    ...style,
  };

  const handleTextChange = (e: { target: { value: any } }) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/); // Split text into words

    if (limit) {
      if (words.length <= limit) {
        onChange && onChange(e.target.value);
      }
    } else {
      onChange && onChange(e.target.value);
    }
  };

  return (
    <Fragment>
      {multiline ? (
        <Input.TextArea
          ref={ref}
          size={size}
          value={value}
          style={customStyle}
          allowClear={allowClear}
          autoSize={autoSize}
          bordered={bordered}
          maxLength={maxLength}
          showCount={showCount}
          placeholder={placeholder}
          required={required}
          className={className}
          disabled={disabled}
          rows={rows || 4}
          status={status}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          onPressEnter={onPressEnter}
          onChange={handleTextChange}
        />
      ) : secure ? (
        <Input.Password
          ref={ref}
          style={customStyle}
          value={value}
          placeholder={placeholder}
          required={required}
          allowClear={allowClear}
          className={className}
          disabled={disabled}
          prefix={prefix}
          suffix={suffix}
          maxLength={maxLength}
          addonAfter={addonAfter}
          addonBefore={addonBefore}
          bordered={bordered}
          showCount={showCount}
          status={status}
          size={size}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          onPressEnter={onPressEnter}
          onChange={handleTextChange}
        />
      ) : (
        <Input
          ref={ref}
          style={customStyle}
          value={value}
          placeholder={placeholder}
          required={required}
          allowClear={allowClear}
          className={className}
          disabled={disabled}
          suffix={suffix}
          prefix={prefix}
          maxLength={maxLength}
          addonAfter={addonAfter}
          addonBefore={addonBefore}
          bordered={bordered}
          showCount={showCount}
          status={status}
          size={size}
          type={type}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          onPressEnter={onPressEnter}
          onChange={handleTextChange}
        />
      )}
      {error && (
        <Text className="mt-8" color="RED" size="XS">
          {error}
        </Text>
      )}
    </Fragment>
  );
};

export default TextInput;
