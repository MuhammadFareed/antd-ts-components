import React, { FC } from "react";
import { Checkbox, Space } from "antd";
import { DirectionType, RadioGroupOption } from "@type/index";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import Text from "src/components/text";

type Props = {
  defaultValue?: (string | number)[];
  disabled?: boolean;
  options?: RadioGroupOption[];
  value?: any;
  direction?: DirectionType;
  onChange?: (e: CheckboxValueType[]) => void;
  error?: string;
};

const CheckboxGroupButton: FC<Props> = props => {
  const { defaultValue, disabled, options, value, onChange, direction, error } = props;
  return (
    <Checkbox.Group defaultValue={defaultValue} disabled={disabled} value={value} onChange={onChange}>
      <Space direction={direction}>
        {options &&
          options?.length > 0 &&
          options?.map((option: RadioGroupOption) => (
            <Checkbox key={option?.id} value={option?.value}>
              {option?.label}
            </Checkbox>
          ))}
        {error && (
          <Text color="RED" size="XS">
            {error}
          </Text>
        )}
      </Space>
    </Checkbox.Group>
  );
};

export default CheckboxGroupButton;
