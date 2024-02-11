/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactNode, memo, useCallback, useEffect, useState } from "react";
import Header from "src/components/header";
import { Affix, Drawer } from "antd";
import { Layout } from "antd";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "src/store/actions";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import LayoutSidebar from "./layout-sidebar";

type Props = {
  children?: ReactNode;
  showBreadcrumb?: boolean;
};

const LearningLayout: FC<Props> = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const minWidthForLargeScreen = 999;
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > minWidthForLargeScreen);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsLargeScreen(window.innerWidth > minWidthForLargeScreen);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const fetchData = useCallback(() => {
    // action.getTrainingPhases();
    // action.getOutlineAssessment();
    // action.getExpressResources();
    // action.getPremiumResources();
    action.getLearningResources();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="learning_library">
      <Header />
      <Drawer
        width={340}
        open={showSidebar}
        placement="left"
        bodyStyle={{ overflowX: "hidden" }}
        title={"Learning Library"}
        onClose={() => setShowSidebar(false)}>
        <LayoutSidebar />
      </Drawer>
      <div className="container">
        <Layout className="bg-inherit px-0 py-24">
          {isLargeScreen ? (
            <Affix offsetTop={85}>
              <LayoutSidebar />
            </Affix>
          ) : (
            <div className={styles.hamburger_container}>
              <div className={styles.hamburger_icon} onClick={() => setShowSidebar(true)}>
                <MenuUnfoldOutlined />
              </div>
            </div>
          )}
          {children && (
            <Layout.Content
              className={styles.content}
              style={{
                minHeight: "calc(100vh - 146px)",
                // height: "calc(100vh - 146px)",
                height: "100%",
                overflow: "auto",
                marginLeft: isLargeScreen ? 20 : 0,
              }}>
              {children}
            </Layout.Content>
          )}
        </Layout>
      </div>
    </div>
  );
};

export default memo(LearningLayout);
