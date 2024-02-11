import React, { FC, MouseEvent } from "react";
import { ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import Text from "src/components/text";
import { Space, message } from "antd";
import student_icon from "src/assets/svgs/red_grade.svg";
import grade_icon from "src/assets/svgs/red_grade2.svg";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Button from "src/components/button";
import MenuItems from "src/components/menu-items";
import { MenuItemType, Package } from "@type/index";
import noPackageCoverImage from "src/assets/images/no_cover.png";
import slugify from "@sindresorhus/slugify";
import { getConvertedTime, getGrades, getPackageAmount, openLinkInNewTab } from "src/utils";
import Tag from "src/components/tag";

type Props = {
  isShowStatus?: boolean;
  menuOptions?: MenuItemType[];
  item: Package;
  isButtonDisabled?: boolean;
};

const PackageCard: FC<Props> = props => {
  const { isShowStatus = true, menuOptions = [], item, isButtonDisabled = false } = props;
  const navigate = useNavigate();
  const gotoUrl = `/packages/${item?.id}`;

  const gotoPackageDetail = (e: MouseEvent<HTMLDivElement>) => {
    if (isButtonDisabled) {
      const title = slugify(item.title);
      const link = `http://dotandlinelearning.com/courses/${title}/${item.id}`;
      openLinkInNewTab(link);
    } else {
      e?.stopPropagation();
      navigate(gotoUrl);
    }
  };

  return (
    <div className={styles.package_card} onClick={gotoPackageDetail}>
      {/* {item?.access_mode} */}
      <div className={styles.package_cover}>
        <img alt="cover" src={item?.image || noPackageCoverImage} />
        {isShowStatus && (
          <>
            {item?.package_mode === "online" ? (
              <div className={[styles.tag, styles.online_tag].join(" ")}>ONLINE</div>
            ) : (
              <div className={[styles.tag, styles.onsite_tag].join(" ")}>ONSITE</div>
            )}
          </>
        )}
      </div>
      <div className={styles.card_body}>
        <div className="justify-between">
          <Space className={styles.rating_space}>
            <StarFilled className={styles.star} />
            <p className="mb-0">{item?.teacher?.ratings || 0}</p>
          </Space>
          {!isShowStatus && <div className={styles.active}>ACTIVE</div>}
        </div>
        <Text
          hoveredTitle={item?.title}
          className={["mt-6 overflow-elipsis", styles.title].join(" ")}
          size="M2"
          font={"SEMIBOLD"}>
          {item?.title || ""}
        </Text>
        <div>
          <Space className={styles.days_row}>
            {item?.time_slot && item?.time_slot?.length !== 0 && (
              <Tag
                title={item?.time_slot?.length > 1 ? "Multiple Slots" : item?.time_slot[0]?.days?.split(",").join(", ")}
                color="grey"
              />
            )}
            {item?.grades && item?.grades?.length !== 0 && (
              <Space className={styles.grade}>
                <img src={grade_icon} alt="" />
                <p>{`Grade ${getGrades(item)}`}</p>
              </Space>
            )}
            <Space className={styles.grade}>
              <img src={student_icon} alt="" />
              <p>{`${item?.active_enrollments_count || 0} ${
                item?.active_enrollments_count > 1 ? "Students" : "Student"
              }`}</p>
            </Space>
          </Space>
        </div>
        {item?.time_slot && item?.time_slot?.length !== 0 && (
          <Space className={styles.class_timing}>
            <div className={styles.red_color}>
              <ClockCircleOutlined className={styles.class_timing_icon} />
            </div>
            <p>{getConvertedTime(item?.time_slot[0])}</p>
          </Space>
        )}
        <Text color="DARK_GREEN" font="SEMIBOLD" className="mt-14">
          {getPackageAmount(item, "PKR")}
        </Text>
        <Text color="LIGHT_INDIGO" font="SEMIBOLD" className="mt-10 mb-14">
          {getPackageAmount(item, "USD")}
        </Text>

        {!isButtonDisabled && (
          <div className="justify-between">
            <Space>
              <Button type="tertiary" onClick={() => navigate(gotoUrl)}>
                View
              </Button>
              <Button
                onClick={() => {
                  if (item?.time_slot && item?.time_slot?.length !== 0 && item?.time_slot[0]?.zoom_link) {
                    openLinkInNewTab(item?.time_slot[0]?.zoom_link);
                  } else {
                    message.error("Zoom link not found!");
                  }
                }}>
                Start Class
              </Button>
            </Space>
            <MenuItems options={menuOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
