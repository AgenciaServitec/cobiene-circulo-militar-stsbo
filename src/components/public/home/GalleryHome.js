import React from "react";
import { Gallery } from "./Gallery";
import { galleryData } from "../../../data-list";

export const GalleryHome = () => (
  <>
    <Gallery images={galleryData} title="GALERIA DE SEDES" />
  </>
);
