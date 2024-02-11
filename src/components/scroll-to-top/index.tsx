import React, { useEffect, Fragment, ReactNode, FC } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ScrollToTop: FC<Props> = props => {
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
