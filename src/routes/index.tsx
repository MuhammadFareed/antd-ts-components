import React from "react";
import Home from "src/pages/home";
import NotFound from "src/pages/not-found";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "src/components/scroll-to-top";
import Login from "src/pages/login";
import TeacherManager from "src/pages/teacher-manager";
import TeacherManagerDetails from "src/pages/teacher-manager-details";
import TeacherManagerReport from "src/pages/teacher-manager-report";
import Packages from "src/pages/packages";
import Profile from "src/pages/profile";
import Demos from "src/pages/demos";
import Payments from "src/pages/payments";
import Learning from "src/pages/learning";
import LearningPhase from "src/pages/learning-phase";
import OutlinesAndAssessment from "src/pages/outlines-and-assessment";
import PremiumResources from "src/pages/premium-resources";
import ExpressResources from "src/pages/express-resources";
import PackageDetails from "src/pages/package-details";
import CreatePackage from "src/pages/create-package";
import Notifications from "src/pages/notifications";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducers";
import GetAndStoreData from "src/components/get-and-store-data";
import TransferStudent from "src/pages/package-details/transfer-student";

const AppRoutes = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="login" element={<Login />} />
          {isAuth && (
            <>
              <Route index element={<Home />} />
              <Route path="teacher-manager" element={<TeacherManager />} />
              <Route path="teacher-manager/:id" element={<TeacherManagerDetails />} />
              <Route path="teacher-manager/report" element={<TeacherManagerReport />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="packages" element={<Packages />} />
              <Route path="packages/create-package" element={<CreatePackage />} />
              <Route path="packages/edit/:id" element={<CreatePackage edit={true} />} />
              <Route path="packages/:id" element={<PackageDetails />} />
              <Route path="packages/transfer-student/:enrolmentId" element={<TransferStudent />} />
              <Route path="demos" element={<Demos />} />
              <Route path="payments" element={<Payments />} />
              <Route path="learning" element={<Learning />} />
              <Route path="learning/:phaseId/:moduleId" element={<LearningPhase />} />
              <Route path="learning/outlines-and-assessment/:subjectId" element={<OutlinesAndAssessment />} />
              <Route path="learning/premium-resources/:subjectId" element={<PremiumResources />} />
              <Route path="learning/express-resources/:id" element={<ExpressResources />} />
              <Route
                path="learning/express-resources"
                element={<Navigate replace to="/learning/express-resources/introduction" />}
              />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>

        <GetAndStoreData />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default AppRoutes;
