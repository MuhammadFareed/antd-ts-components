/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import { ArrowRightOutlined, LockFilled } from "@ant-design/icons";
import { RootState } from "@store/reducers";
import { OutlineAssessmentSubject, PremiumResourceSubject, TrainingModule, TrainingPhase } from "@type/index";
import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import learnig_training_pink from "src/assets/svgs/learnig_training_pink.svg";
import learnig_outline_pink from "src/assets/svgs/learnig_outline_pink.svg";
import learnig_premium_pink from "src/assets/svgs/learnig_premium_pink.svg";
import learnig_express_pink from "src/assets/svgs/learnig_express_pink.svg";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "src/store/actions";

const LayoutSidebar = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const { general, profile, learning } = useSelector((state: RootState) => state);
  const { userProfile } = profile;
  const { activeLearningMenu } = general;
  const { trainingPhases, premiumResourceSubjects, outlineAssessmentSubjects } = learning?.learningResouces;
  const activePhase = userProfile?.teacher?.training_phase || 0;

  const menuItems: MenuProps["items"] = [
    {
      key: "Teacher Training",
      icon: <img src={learnig_training_pink} alt="" />,
      label: "Teacher Training",
      children: trainingPhases?.map((phase: TrainingPhase) => {
        const phaseDisabled = activePhase !== 0 && phase?.id > activePhase;
        return {
          key: `pahse${phase?.id}`,
          disabled: phaseDisabled,
          icon: <ArrowRightOutlined />,
          label: (
            <div>
              <span className={"submenu_label"}>{`Phase ${phase?.id}`}</span>
              {phaseDisabled ? <LockFilled className="ml-12" style={{ fontSize: 16 }} /> : null}
            </div>
          ),
          children: phase?.modules?.map((module: TrainingModule) => {
            return {
              key: `module${module?.index}`,
              label: (
                <Link to={`/learning/phase${phase?.id}/module${module?.index}`}>
                  <span className={"submenu_label"}> {module?.title}</span>
                </Link>
              ),
            };
          }),
        };
      }),
    },
    {
      key: "Outlines & Assessment",
      icon: <img src={learnig_outline_pink} alt="" />,
      label: "Outlines & Assessment",
      children: outlineAssessmentSubjects?.map((outlineSubject: OutlineAssessmentSubject) => {
        if (outlineSubject) {
          return {
            key: outlineSubject?.id,
            label: (
              <Link to={`/learning/outlines-and-assessment/${outlineSubject?.id}`}>
                <span className={"submenu_label"}>{outlineSubject?.subject}</span>
              </Link>
            ),
          };
        }
        return null;
      }),
    },
    // {
    //   key: "Premium Resources",
    //   label: "Premium Resources",
    //   icon: <img src={learnig_premium_pink} alt="" />,
    //   children: premiumResourceSubjects?.map((premiumSubject: PremiumResourceSubject) => {
    //     if (premiumSubject) {
    //       return {
    //         key: premiumSubject?.id,
    //         label: (
    //           <Link to={`/learning/premium-resources/${premiumSubject?.id}`}>
    //             <span className={"submenu_label"}>{premiumSubject?.subject}</span>
    //           </Link>
    //         ),
    //       };
    //     }
    //     return null;
    //   }),
    // },
    {
      key: "Express Resources",
      icon: <img src={learnig_express_pink} alt="" />,
      label: "Express Resources",
      children: [
        {
          key: "Introduction",
          label: (
            <Link to={"/learning/express-resources/introduction"}>
              <span className={"submenu_label"}>Introduction</span>
            </Link>
          ),
        },
        {
          key: "Homework Help",
          label: (
            <Link to={"/learning/express-resources/homework-help"}>
              <span className={"submenu_label"}>Homework Help</span>
            </Link>
          ),
        },
        {
          key: "School Admission Tests",
          label: (
            <Link to={"/learning/express-resources/school-admission-tests"}>
              <span className={"submenu_label"}>School Admission Tests</span>
            </Link>
          ),
        },
        {
          key: "Supplementary Online Resources",
          label: (
            <Link to={"/learning/express-resources/supplementary-online-resources"}>
              <span className={"submenu_label"}>Supplementary Online Resources</span>
            </Link>
          ),
        },
      ],
    },
  ];

  const siderStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ebebeb",
    borderRadius: "10px",
    overflow: "auto",
  };

  return (
    <Layout.Sider width={300} style={siderStyle}>
      <Menu
        mode="inline"
        items={menuItems}
        defaultOpenKeys={activeLearningMenu}
        defaultSelectedKeys={activeLearningMenu}
        onSelect={({ keyPath }: { keyPath: string[] }) => action.setActiveLearningMenu(keyPath)}
      />
    </Layout.Sider>
  );
};

export default LayoutSidebar;
