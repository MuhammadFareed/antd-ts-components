/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, Fragment, useState } from "react";
import { Affix, Badge } from "antd";
import styles from "./styles.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import bell_light from "src/assets/icons/bell_light.png";
import anonymous from "src/assets/images/anonymous.jpeg";
import Dropdown from "src/components/dropdown";
import { MenuOutlined } from "@ant-design/icons";
import Drawer from "src/components/drawer";
import Loader from "src/components/loader";
import NotificationMenuItem from "./notification-menu-item";
import ViewAllNotificationLink from "./view-all-notification-link";
import Link from "src/components/link";
import { authServices } from "src/services";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "src/store/actions";
import { RootState } from "@store/reducers";
import { ProfileStateType } from "@type/index";

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const isHome = window?.location?.pathname === "/";
  const { userProfile }: ProfileStateType = useSelector((state: RootState) => state?.profile);

  // useStates
  const [scrolled, setScrolled] = useState<boolean | undefined>(false);
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
  const [showMobileMenuOptions, setShowMobileMenuOptions] = useState<boolean>(false);

  const logoutSuccess = () => {
    action.logoutCurrentUser();
    setLogoutLoading(false);
    navigate("/login");
  };

  const logoutHandler = () => {
    setLogoutLoading(true);
    authServices
      .logout()
      .then(() => {
        logoutSuccess();
      })
      .catch(() => {
        setLogoutLoading(false);
      });
  };

  const navItems = [
    {
      key: "0",
      label: "Home",
      path: "/",
    },
    {
      key: "1",
      label: "Packages",
      path: "/packages",
    },
    {
      key: "2",
      label: "Demos",
      path: "/demos",
    },
    {
      key: "4",
      label: "Payments",
      path: "/payments",
    },
    {
      key: "5",
      label: "Learning",
      path: "/learning",
    },
  ];

  const drawerNavItems = [
    {
      key: "0",
      label: "Home",
      path: "/",
    },
    {
      key: "1",
      label: "Packages",
      path: "/packages",
    },
    {
      key: "2",
      label: "Demos",
      path: "/demos",
    },
    {
      key: "4",
      label: "Payments",
      path: "/payments",
    },
    {
      key: "5",
      label: "Learning",
      path: "/learning",
    },
    // {
    //   key: "6",
    //   label: "Notifications",
    //   path: "/notifications",
    // },
    {
      key: "7",
      label: "Profile",
      path: "/profile",
    },
  ];

  if (userProfile?.area_manager) {
    const tempObj = {
      key: "3",
      label: "Teacher Manager",
      path: "/teacher-manager",
    };
    navItems.splice(3, 0, tempObj);
    drawerNavItems.splice(3, 0, tempObj);
  }

  const notificationMenuItems = [
    {
      key: "0",
      label: <NotificationMenuItem />,
    },
    {
      key: "1",
      label: <NotificationMenuItem />,
    },
    {
      key: "2",
      label: <NotificationMenuItem />,
    },
    {
      key: "3",
      label: <ViewAllNotificationLink />,
    },
  ];

  const accountMenuItems = [
    {
      key: "0",
      label: <Link to={"/profile"}>Profile</Link>,
    },
    {
      key: "1",
      label: <div onClick={logoutHandler}>Log Out</div>,
    },
  ];

  return (
    <Fragment>
      {logoutLoading && <Loader fullPage text={"You are being logged out..."} />}
      <Affix onChange={setScrolled}>
        <div className={styles.z_index}>
          {isHome && (
            <div className={[styles.pink_div, scrolled ? styles.pink_div_hide : styles.pink_div_show].join(" ")} />
          )}
          <div className={styles.header}>
            <Link to={"/"}>
              <img src={logo} alt="Logo" className={[styles.logo, "my-17 mx-20"].join(" ")} />
            </Link>
            <div className={styles.mobile_menu}>
              <MenuOutlined className={styles.menu_size} onClick={() => setShowMobileMenuOptions(true)} />
            </div>
            <Drawer
              onClose={() => setShowMobileMenuOptions(false)}
              placement="left"
              open={showMobileMenuOptions}
              title={
                <Link to={"/"}>
                  <img className={styles.logo} src={logo} alt="Brand-logo" />
                </Link>
              }>
              <div className="d-column mt-20">
                {drawerNavItems?.map(drawerNavItem => (
                  <NavLink key={drawerNavItem?.key} to={drawerNavItem?.path} className={styles.mobile_drawer_item}>
                    <span>{drawerNavItem?.label}</span>
                  </NavLink>
                ))}
                <div className="cursor-pointer">
                  <p
                    className={["mb-0", styles.mobile_drawer_item, styles.mobile_drawer_item_logout].join(" ")}
                    onClick={logoutHandler}>
                    Logout
                  </p>
                </div>
              </div>
            </Drawer>
            <div className={[styles.nav_items, styles.navbar_large_screen_items].join(" ")}>
              {navItems?.map(navItem => (
                <NavLink className={styles.nav_item} to={navItem.path} key={navItem?.key}>
                  {({ isActive }) => {
                    return (
                      <Fragment>
                        <div className={styles.nav_item_div}>
                          <span>{navItem?.label}</span>
                        </div>
                        <div
                          className={[styles.nav_item_bottom_div, isActive ? styles.active_nav_item : ""].join(" ")}
                        />
                      </Fragment>
                    );
                  }}
                </NavLink>
              ))}
            </div>
            <div className={["mx-20", styles.navbar_large_screen_items].join(" ")}>
              {/* <div className="mr-20">
                <Dropdown
                  overlayClassName={styles.dropdownStyle}
                  menuItems={notificationMenuItems}
                  showDefaultRightIcon={false}
                  placement={"bottomRight"}
                  title={
                    <Badge count={2} color={"#D01E79"}>
                      <img src={bell_light} alt="bell icon" className={styles.bell_light} />
                    </Badge>
                  }
                />
              </div> */}
              <div className="d-flex">
                <Dropdown
                  menuItems={accountMenuItems}
                  title={
                    <div className="d-flex align-center">
                      <img src={userProfile?.picture || anonymous} alt="DP" className={styles.test_tp} />
                      <div className="mx-7">
                        <p className={[styles.user_name, "overflow-elipsis mb-0"].join(" ")}>
                          {userProfile?.name || ""}
                        </p>
                        {userProfile?.area_manager ? (
                          <p className={[styles.teacher_type, "overflow-elipsis mb-0"].join(" ")}>Teacher Manager</p>
                        ) : null}
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Affix>
    </Fragment>
  );
};

export default Header;
