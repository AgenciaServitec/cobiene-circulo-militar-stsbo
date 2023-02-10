import React from 'react';
import {Gallery} from "./Gallery";
import {
    ImageGalleyHome1, ImageGalleyHome10, ImageGalleyHome11, ImageGalleyHome12, ImageGalleyHome13, ImageGalleyHome14,
    ImageGalleyHome2,
    ImageGalleyHome3,
    ImageGalleyHome4,
    ImageGalleyHome5, ImageGalleyHome6, ImageGalleyHome7, ImageGalleyHome8, ImageGalleyHome9
} from "../../../images";

export const GalleryHome = () => {
    const images = [{src:ImageGalleyHome1,title:"Reconocimiento al Personal Militar"},{src:ImageGalleyHome2, title: "Sobre nosotros"},{src:ImageGalleyHome3, title: "Areas de recreacionales"},{src:ImageGalleyHome4, title: "Piscinas de las Sedes"},{src:ImageGalleyHome5, title: "Piscinas de las Sedes"},{src:ImageGalleyHome6, title: "Piscinas de las Sedes"},{src:ImageGalleyHome7, title: "oficinas sede chorrillos"},{src:ImageGalleyHome8,title:""},{src:ImageGalleyHome9, title: "Piscinas de las Sedes"},{src:ImageGalleyHome10, title: "Areas Sociales"},{src:ImageGalleyHome11, title: "Areas de sociales"},{src:ImageGalleyHome12, title: "Areas de Eventos"},{src:ImageGalleyHome13, title: "oficinas sede chorrillos"},{src:ImageGalleyHome14, title: "oficinas sede chorrillos"}]
    return (
        <div>
            <Gallery images={images} title="GALERIA DE SEDES"/>
        </div>
    );
};
