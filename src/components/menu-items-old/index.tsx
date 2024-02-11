import React, { FC, Fragment, useEffect, useState } from "react";
import styles from "./styles.module.css";
import dots_menu from "src/assets/svgs/dots_vertical_rounded.svg";
import Text from "src/components/text";
import { MenuItemType } from "@type/index";
import { useRef } from "react";
import { RightOutlined } from "@ant-design/icons";

type Props = {
  options: MenuItemType[];
  data?: any;
};

const MenuItems: FC<Props> = props => {
  const { options, data } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (ref?.current && !ref.current.contains(target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      {options && options?.length !== 0 && (
        <div className="p-relative">
          <div
            className={styles.dots_menu_div}
            onClick={e => {
              e?.stopPropagation();
              setShowMenu(prev => !prev);
            }}>
            <img src={dots_menu} alt="" className={styles.dots_menu_icon} />
          </div>
          {showMenu && (
            <div className={styles.menu_list} ref={ref}>
              {options?.map((option: MenuItemType) => (
                <div
                  key={option?.id}
                  className={[styles.menu_item, option.disabled ? styles.disabled_option : ""].join(" ")}
                  onClick={e => {
                    e.stopPropagation();
                    if (!option?.disabled) {
                      option?.onClick && option?.onClick(data);
                    }
                  }}>
                  <Text font="LIGHTER" color="BLACK" size="S" className={styles.item_text}>
                    <div className="d-row justify-between">
                      {option.label}
                      {option?.suffixIcon
                        ? option?.suffixIcon
                        : option?.children && option?.children?.length !== 0 && <RightOutlined className="ml-12" />}
                    </div>
                  </Text>
                  {option?.children && option?.children?.length !== 0 && (
                    <div className={styles.submenu_list}>
                      {option?.children?.map(submenu => (
                        <div
                          key={submenu?.id}
                          className={[styles.menu_item, submenu.disabled ? styles.disabled_option : ""].join(" ")}
                          onClick={e => {
                            e.stopPropagation();
                            if (!submenu?.disabled) {
                              submenu?.onClick && submenu?.onClick(data);
                            }
                          }}>
                          <Text key={submenu?.id} font="LIGHTER" color="BLACK" size="S" className={styles.item_text}>
                            {submenu.label}
                          </Text>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default MenuItems;
