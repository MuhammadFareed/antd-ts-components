import React, { FC, Fragment, ReactNode } from "react";
import { ButtonSize, DirectionType, OptionType, RadioGroupOption } from "@type/index";
import { RadioGroupButtonStyle } from "antd/es/radio";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import Text from "src/components/text";

type Props = {
  buttonStyle?: RadioGroupButtonStyle;
  defaultValue?: ReactNode;
  disabled?: boolean;
  options?: RadioGroupOption[];
  optionType?: OptionType;
  size?: ButtonSize;
  value?: string;
  direction?: DirectionType;
  error?: string;
  onChange?: (e: RadioChangeEvent) => void;
};

const RadioGroupButton: FC<Props> = ({
  buttonStyle,
  defaultValue,
  disabled,
  options,
  optionType,
  size,
  value,
  onChange,
  direction,
  error,
}) => {
  return (
    <Fragment>
      <Radio.Group
        buttonStyle={buttonStyle}
        defaultValue={defaultValue}
        disabled={disabled}
        optionType={optionType}
        size={size}
        value={value}
        onChange={onChange}>
        <Space direction={direction}>
          {options &&
            options?.length &&
            options?.map((option: RadioGroupOption) => (
              <Radio key={option?.id} value={option?.value}>
                {option?.label}
              </Radio>
            ))}
        </Space>
      </Radio.Group>
      {error && (
        <Text className="mt-8" color="RED" size="XS">
          {error}
        </Text>
      )}
    </Fragment>
  );
};

export default RadioGroupButton;
