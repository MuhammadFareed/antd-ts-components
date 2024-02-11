import React, { FC } from "react";
import styles from "./styles.module.css";
import { StringMetaData, TeacherBadgeType } from "@type/index";
import badge_graduated_orange from "src/assets/svgs/badge_graduated_orange.svg";
import badge_manager_pink from "src/assets/svgs/badge_manager_pink.svg";
import badge_super_red from "src/assets/svgs/badge_super_red.svg";
import { Tooltip } from "antd";

type Props = {
  type: TeacherBadgeType;
};

const Badge: FC<Props> = props => {
  const { type } = props;

  const imageSrcs: StringMetaData = {
    teacher_manager: badge_manager_pink,
    super_teacher: badge_super_red,
    graduate_teacher: badge_graduated_orange,
  };

  const titleValues: StringMetaData = {
    teacher_manager: "Teacher Manager",
    super_teacher: "Super Teacher",
    graduate_teacher: "Graduate Teacher",
  };

  return (
    <Tooltip placement="bottom" title={titleValues[type]}>
      <div className={[styles[type], styles.badge].join(" ")}>
        <img src={imageSrcs[type]} alt="Badge" />
      </div>
    </Tooltip>
  );
};

export default Badge;
