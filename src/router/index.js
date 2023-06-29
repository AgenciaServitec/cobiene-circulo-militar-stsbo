import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
  Home,
  Page404,
  ContactSuccess,
  PageSedeChorrillos,
  PageSedeRimac,
  PageSedeTarapaca,
  GalleryPage,
  FlipBook,
} from "../pages";

export const Router = () => {
  const [videosSedes, setVideosSedes] = useState(false);

  const onVideosSedes = () => {
    setVideosSedes(!videosSedes);
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout sectionVideo={true}>
            <Home />
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
          <BaseLayout
            sectionVideo={true}
            onVideosSedes={onVideosSedes}
            setVideosSedes={setVideosSedes}
          >
            <PageSedeChorrillos videosSedes={videosSedes} />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/sede-tarapaca"
        element={
          <BaseLayout sectionVideo={false}>
            <PageSedeTarapaca />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/sede-rimac"
        element={
          <BaseLayout sectionVideo={false}>
            <PageSedeRimac />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/galleria"
        element={
          <BaseLayout sectionVideo={false}>
            <GalleryPage />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/flip-book/:type"
        element={
          <BaseLayout>
            <FlipBook />
          </BaseLayout>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
