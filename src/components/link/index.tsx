import React, { FC, ReactNode } from "react";
import { Link as AnchorLink } from "react-router-dom";

type Props = {
  children?: ReactNode;
  to: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  className?: string;
};

const Link: FC<Props> = props => {
  const { children, to, target, className } = props;
  return (
    <AnchorLink className={className} to={to} target={target}>
      {children}
    </AnchorLink>
  );
};

export default Link;
