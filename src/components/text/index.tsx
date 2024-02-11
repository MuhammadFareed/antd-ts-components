import { Color, Font, IFontWeight, ILineHeight, ISize, Size } from "@type/index";
import React, { CSSProperties, FC, ReactNode, useCallback, useMemo } from "react";
import { theme } from "src/constant/theme";

const sizes: ISize = {
  XXL2: 30,
  XXL: 24,
  XL: 22,
  L: 20,
  M: 18,
  M2: 16,
  S: 14,
  XS: 12,
  XXS: 10,
  DEFAULT: 16,
};

const lineHeight: ILineHeight = {
  DEFAULT: 1,
  XXS: 1.1,
  XS: 1.3,
  S: 1.5,
  M: 1.7,
  M2: 1.6,
  L: 1.9,
  XL: 2.3,
  XXL: 2.5,
  XXL2: 2.6,
};

const fontWeight: IFontWeight = {
  LIGHTEST: "300",
  LIGHTER: "400",
  NORMAL: "500",
  SEMIBOLD: "600",
  BOLD: "700",
  BOLDER: "900",
};

type Props = {
  title?: string;
  customStyles?: CSSProperties;
  size?: Size;
  font?: Font;
  bold?: boolean;
  color?: Color;
  lHeight?: Size;
  className?: string;
  children?: ReactNode;
  hoveredTitle?: string;
};

const Text: FC<Props> = props => {
  const { customStyles, title, size, font, color, lHeight, bold, className, children, hoveredTitle = "" } = props;

  const getFontWeight: () => string = useCallback(() => {
    if (bold) {
      return fontWeight.BOLD;
    } else if (font && !bold) {
      return fontWeight[font];
    }
    return fontWeight.NORMAL;
  }, [bold, font]);

  const defaultStyle = useMemo(() => {
    return {
      fontSize: size ? sizes[size] : sizes.DEFAULT,
      color: color ? theme[color] : theme.BLACK,
      lineHeight: lHeight ? lineHeight[lHeight] : lineHeight.XXS,
      fontWeight: getFontWeight(),
    };
  }, [color, getFontWeight, lHeight, size]);

  const getTextStyles = useCallback(() => {
    if (customStyles) {
      return { ...defaultStyle, ...customStyles };
    }
    return defaultStyle;
  }, [customStyles, defaultStyle]);

  return (
    <div title={hoveredTitle} className={className} style={getTextStyles()}>
      {title || children}
    </div>
  );
};

export default Text;
