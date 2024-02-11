import React, { CSSProperties, Fragment, FunctionComponent, ReactNode } from "react";
import { Select } from "antd";
import Text from "src/components/text";
import { FilterFunc } from "rc-select/lib/Select";
import { SelectMaxTagCount, SelectMode, SelectPlacement, ButtonSize, SelectItemType } from "@type/index";

type Props = {
  allowClear?: boolean;
  autoClearSearchValue?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  clearIcon?: ReactNode;
  className?: string;
  defaultActiveFirstOption?: boolean;
  defaultOpen?: boolean;
  defaultValue?: string | string[] | number | number[] | SelectItemType | SelectItemType[];
  disabled?: boolean;
  popupClassName?: string;
  dropdownMatchSelectWidth?: number | boolean;
  dropdownStyle?: CSSProperties;
  customStyles?: CSSProperties;
  listHeight?: number; // default value is 256
  loading?: boolean;
  menuItemSelectedIcon?: ReactNode;
  maxTagCount?: SelectMaxTagCount;
  mode?: SelectMode;
  notFoundContent?: ReactNode;
  open?: boolean;
  optionFilterProp?: string;
  optionLabelProp?: string;
  options?: SelectItemType[];
  placeholder?: ReactNode;
  placement?: SelectPlacement;
  removeIcon?: ReactNode;
  searchValue?: string;
  showArrow?: boolean;
  showSearch?: boolean;
  size?: ButtonSize;
  status?: "error" | "warning";
  suffixIcon?: ReactNode;
  value?: string | string[] | number | number[] | SelectItemType | SelectItemType[];
  virtual?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: (value: any) => void;
  onClear?: () => void;
  onSearch?: (value: string) => void;
  onSelect?: (value: string | number | SelectItemType) => void;
  filterOption?: boolean | FilterFunc<SelectItemType>;
  error?: string;
};

const SelectInput: FunctionComponent<Props> = props => {
  const {
    allowClear,
    autoClearSearchValue,
    autoFocus,
    bordered,
    clearIcon,
    className,
    customStyles,
    defaultActiveFirstOption,
    defaultOpen,
    defaultValue,
    disabled,
    popupClassName,
    dropdownStyle,
    listHeight,
    loading,
    menuItemSelectedIcon,
    maxTagCount,
    mode,
    notFoundContent,
    open,
    optionFilterProp,
    optionLabelProp,
    options,
    placeholder,
    placement,
    removeIcon,
    searchValue,
    showArrow,
    showSearch,
    size,
    status,
    suffixIcon,
    value,
    virtual,
    error,
    onBlur,
    onFocus,
    onChange,
    onClear,
    onSearch,
    onSelect,
    filterOption = (inputValue: string, option?: SelectItemType) => {
      return String(option?.label)?.toLowerCase()?.includes(inputValue?.toLowerCase());
    },
  } = props;

  const style: CSSProperties = {
    width: "100%",
    color: "#B3B3B3",
    borderRadius: "10px",
    backgroundColor: "#fff",
    border: "1px solid #B3B3B3",
  };

  return (
    <Fragment>
      <Select
        allowClear={allowClear}
        autoClearSearchValue={autoClearSearchValue}
        autoFocus={autoFocus}
        bordered={bordered}
        className={className}
        clearIcon={clearIcon}
        defaultActiveFirstOption={defaultActiveFirstOption}
        defaultOpen={defaultOpen}
        defaultValue={defaultValue}
        disabled={disabled}
        popupClassName={popupClassName}
        dropdownStyle={{ ...style, ...dropdownStyle }}
        listHeight={listHeight}
        loading={loading}
        menuItemSelectedIcon={menuItemSelectedIcon}
        maxTagCount={maxTagCount}
        mode={mode}
        notFoundContent={notFoundContent}
        open={open}
        style={{ width: "100%", ...customStyles }}
        optionFilterProp={optionFilterProp}
        optionLabelProp={optionLabelProp}
        options={options}
        placeholder={placeholder}
        placement={placement}
        removeIcon={removeIcon}
        searchValue={searchValue}
        showArrow={showArrow}
        showSearch={showSearch}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        value={value}
        virtual={virtual}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        onClear={onClear}
        onSearch={onSearch}
        onSelect={onSelect}
        filterOption={filterOption}
      />
      {error && (
        <Text className="mt-8" color="RED" size="XS">
          {error}
        </Text>
      )}
    </Fragment>
  );
};

export default SelectInput;
