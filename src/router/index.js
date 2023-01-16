import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
  Home,
  Page404,
  ContactSuccess,
  PageProducts,
  ServicesExtinguisher,
    SedeTarapaca,
} from "../pages";

export const Router = ({ onClickVisibleFormContact, visibleFormContact }) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home
              onClickVisibleFormContact={onClickVisibleFormContact}
              visibleFormContact={visibleFormContact}
            />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/contact-success"
        element={
          <BaseLayout>
            <ContactSuccess />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/sede-chorrillos"
        element={
          <BaseLayout>
            <PageProducts/>
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/sede-tarapaca"
        element={
          <BaseLayout>
            <SedeTarapaca/>
          </BaseLayout>
        }
      />
        <Route
            exact
            path="/sede-rimac"
            element={
                <BaseLayout>
                    <ServicesExtinguisher/>
                </BaseLayout>
            }
        />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
