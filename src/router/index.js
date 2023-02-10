import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
    Home,
    Page404,
    ContactSuccess, PageSedeChorrillos, PageSedeRimac,PageSedeTarapaca
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home/>
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
            <PageSedeChorrillos/>
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/sede-tarapaca"
        element={
          <BaseLayout>
            <PageSedeTarapaca/>
          </BaseLayout>
        }
      />
        <Route
            exact
            path="/sede-rimac"
            element={
                <BaseLayout>
                    <PageSedeRimac/>
                </BaseLayout>
            }
        />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
