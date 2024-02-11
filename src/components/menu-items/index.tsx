import React, { FC, Fragment } from "react";
import styles from "./styles.module.css";
import dots_menu from "src/assets/svgs/dots_vertical_rounded.svg";
import Text from "src/components/text";
import { MenuItemType } from "@type/index";
import { RightOutlined } from "@ant-design/icons";
import { Popover } from "antd";

type Props = {
  options: MenuItemType[];
  data?: any;
};

const MenuItems: FC<Props> = props => {
  const { options, data } = props;

  const Content = () => (
    <div className={styles.menu_list}>
      {options?.map((option: MenuItemType) => (
        <>
          {option?.children && option?.children?.length !== 0 ? (
            <Popover
              trigger={"click"}
              placement="rightTop"
              overlayStyle={{ zIndex: 0 }}
              overlayInnerStyle={{ padding: 0 }}
              content={() => (
                <div className={styles.menu_list} onClick={e => e?.stopPropagation()}>
                  {option?.children?.map(submenu => (
                    <div
                      className={[styles.menu_item, submenu.disabled ? styles.disabled_option : ""].join(" ")}
                      onClick={e => {
                        e.stopPropagation();
                        if (!submenu?.disabled) {
                          submenu?.onClick && submenu?.onClick(data);
                        }
                      }}>
                      <div className="justify-between">
                        <Text font="LIGHTER" color="BLACK" size="S" className={styles.item_text}>
                          {submenu.label}
                        </Text>
                        {submenu?.suffixIcon ? submenu?.suffixIcon : null}
                      </div>
                    </div>
                  ))}
                </div>
              )}>
              <div className={[styles.menu_item, option.disabled ? styles.disabled_option : ""].join(" ")}>
                <div className="justify-between">
                  <Text font="LIGHTER" color="BLACK" size="S" className={styles.item_text}>
                    {option.label}
                  </Text>
                  {option?.suffixIcon ? option?.suffixIcon : null}
                  <RightOutlined className="ml-12" />
                </div>
              </div>
            </Popover>
          ) : (
            <div
              className={[styles.menu_item, option.disabled ? styles.disabled_option : ""].join(" ")}
              onClick={e => {
                e.stopPropagation();
                if (!option?.disabled) {
                  option?.onClick && option?.onClick(data);
                }
              }}>
              <div className="justify-between">
                <Text font="LIGHTER" color="BLACK" size="S" className={styles.item_text}>
                  {option.label}
                </Text>
                {option?.suffixIcon ? option?.suffixIcon : null}
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );

  return (
    <Fragment>
      {options && options?.length !== 0 && (
        <Popover
          onOpenChange={() => {}}
          trigger="click"
          content={<Content />}
          placement="bottomLeft"
          overlayStyle={{ zIndex: 0 }}
          overlayInnerStyle={{ padding: 0 }}>
          <div className={styles.dots_menu_div} onClick={e => e?.stopPropagation()}>
            <img src={dots_menu} alt="" className={styles.dots_menu_icon} />
          </div>
        </Popover>
      )}
    </Fragment>
  );
};

export default MenuItems;
