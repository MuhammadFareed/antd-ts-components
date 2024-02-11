import React, { FC, Fragment, ReactNode } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

type Props = {
  fullPage?: boolean;
  text?: ReactNode;
  bodyClassName?: string;
  loaderClassName?: string;
};

const Loader: FC<Props> = props => {
  const { fullPage, text = "", loaderClassName, bodyClassName } = props;
  return (
    <Fragment>
      {fullPage ? (
        <div className={styles.full_page}>
          <div className={"d-column"}>
            <div className={[bodyClassName, "justify-center"].join(" ")}>
              <LoadingOutlined className={[styles.full_page_loader, loaderClassName].join(" ")} />
            </div>
            <span className={styles.text}>{text || "Loading..."}</span>
          </div>
        </div>
      ) : (
        <div className={bodyClassName}>
          <LoadingOutlined className={[styles.loader, loaderClassName].join(" ")} />
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
