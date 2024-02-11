/* eslint-disable max-len */
import React, { ChangeEvent, FC, Fragment, CSSProperties } from "react";
import Text from "src/components/text";
import PhoneInput from "react-phone-input-2";
import type { CountryData } from "react-phone-input-2";
import type { InputProps } from "antd";

type Props = {
  error?: string;
  country?: string;
  value?: string;
  onlyCountries?: string[];
  preferredCountries?: string[];
  excludeCountries?: string[];
  placeholder?: string;
  inputProps?: InputProps;
  autoFormat?: boolean;
  disabled?: boolean;
  disableDropdown?: boolean;
  disableCountryCode?: boolean;
  enableAreaCodes?: boolean;
  enableTerritories?: boolean;
  enableLongNumbers?: boolean;
  countryCodeEditable?: boolean;
  enableSearch?: boolean;
  disableSearchIcon?: boolean;
  containerClass?: string;
  inputClass?: string;
  buttonClass?: string;
  dropdownClass?: string;
  searchClass?: string;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  dropdownStyle?: CSSProperties;
  searchStyle?: CSSProperties;
  regions?: string[]; // ['america', 'europe', 'asia', 'oceania', 'africa'] ['north-america', 'south-america', 'central-america', 'carribean', 'eu-union', 'ex-ussr', 'ex-yugos', 'baltic', 'middle-east', 'north-africa']
  defaultMask?: string;
  alwaysDefaultMask?: boolean;
  prefix?: string;
  searchPlaceholder?: string;
  searchNotFound?: string;
  copyNumbersOnly?: boolean;
  renderStringAsFlag?: string;
  autocompleteSearch?: boolean;
  jumpCursorToEnd?: boolean;
  priority?: object;
  enableClickOutside?: boolean;
  showDropdown?: boolean;
  defaultErrorMessage?: string;
  specialLabel?: string;
  disableInitialCountryGuess?: boolean;
  disableCountryGuess?: boolean;
  isValid?: boolean;
  onChange?: (value: string, data: CountryData, event: ChangeEvent<HTMLInputElement>, formattedValue: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
};

const PhoneNumberInput: FC<Props> = props => {
  const {
    error,
    country = "pk",
    value,
    onlyCountries,
    preferredCountries,
    excludeCountries,
    placeholder,
    inputProps,
    autoFormat,
    disabled,
    disableDropdown,
    disableCountryCode,
    enableAreaCodes,
    enableTerritories,
    enableLongNumbers,
    countryCodeEditable,
    enableSearch,
    disableSearchIcon,
    containerClass,
    inputClass,
    buttonClass,
    dropdownClass,
    searchClass,
    containerStyle,
    inputStyle,
    buttonStyle,
    dropdownStyle,
    searchStyle,
    regions,
    defaultMask,
    alwaysDefaultMask,
    prefix,
    searchPlaceholder,
    searchNotFound,
    copyNumbersOnly,
    renderStringAsFlag,
    autocompleteSearch,
    jumpCursorToEnd,
    priority,
    enableClickOutside,
    showDropdown,
    defaultErrorMessage,
    specialLabel,
    disableInitialCountryGuess,
    disableCountryGuess,
    isValid = true,
    onChange,
    onFocus,
    onBlur,
    onClick,
    onKeyDown,
  } = props;

  return (
    <Fragment>
      <PhoneInput
        country={country}
        value={value}
        onlyCountries={onlyCountries}
        preferredCountries={preferredCountries}
        excludeCountries={excludeCountries}
        placeholder={placeholder}
        inputProps={inputProps}
        autoFormat={autoFormat}
        disabled={disabled}
        disableDropdown={disableDropdown}
        disableCountryCode={disableCountryCode}
        enableAreaCodes={enableAreaCodes}
        enableTerritories={enableTerritories}
        enableLongNumbers={enableLongNumbers}
        countryCodeEditable={countryCodeEditable}
        enableSearch={enableSearch}
        disableSearchIcon={disableSearchIcon}
        containerClass={containerClass}
        inputClass={inputClass}
        buttonClass={buttonClass}
        dropdownClass={dropdownClass}
        searchClass={searchClass}
        containerStyle={{ ...containerStyle }}
        inputStyle={{ width: "100%", border: "1px solid #d9d9d9", height: 32, borderRadius: 6, ...inputStyle }}
        buttonStyle={{
          border: "1px solid #d9d9d9",
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
          backgroundColor: "#fff",
          ...buttonStyle,
        }}
        dropdownStyle={dropdownStyle}
        searchStyle={searchStyle}
        regions={regions}
        defaultMask={defaultMask}
        alwaysDefaultMask={alwaysDefaultMask}
        prefix={prefix}
        searchPlaceholder={searchPlaceholder}
        searchNotFound={searchNotFound}
        copyNumbersOnly={copyNumbersOnly}
        renderStringAsFlag={renderStringAsFlag}
        autocompleteSearch={autocompleteSearch}
        jumpCursorToEnd={jumpCursorToEnd}
        priority={priority}
        enableClickOutside={enableClickOutside}
        showDropdown={showDropdown}
        defaultErrorMessage={defaultErrorMessage}
        specialLabel={specialLabel}
        disableInitialCountryGuess={disableInitialCountryGuess}
        disableCountryGuess={disableCountryGuess}
        isValid={isValid}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
      {error && (
        <Text className="mt-8" color="RED" size="XS">
          {error}
        </Text>
      )}
    </Fragment>
  );
};

export default PhoneNumberInput;
