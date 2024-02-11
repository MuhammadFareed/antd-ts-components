import React, { FC, Fragment, ReactNode } from "react";
import styles from "./styles.module.css";
import teacher_icon from "src/assets/svgs/teacher.svg";
import Text from "src/components/text";

type Props = {
  bannerClassName?: string;
  customIcon?: ReactNode;
  customDesign?: boolean;
  children?: ReactNode;
  heading?: string;
  subHeading?: string;
  extraContent?: ReactNode;
};

const YellowMessageBanner: FC<Props> = props => {
  const { bannerClassName, customIcon, customDesign, children, heading = "", subHeading = "", extraContent } = props;
  return (
    <div className={[styles.yellow_banner, bannerClassName].join(" ")}>
      <div className="d-row">
        {customDesign ? (
          <Fragment>{children}</Fragment>
        ) : (
          <Fragment>
            {customIcon || <img className={styles.teacher_icon} src={teacher_icon} alt="" />}
            <div>
              <Text title={heading} font="SEMIBOLD" size="M2" />
              <Text title={subHeading} className="mt-8 italic" font="LIGHTER" size="S" />
              {extraContent && extraContent}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default YellowMessageBanner;
