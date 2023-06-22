import moment from "moment";
import {
  CatalogoNovely,
  CobieneAppNovelty,
  CobieneWebNovelty,
  FacebookSede,
  ImageGalleyHome1,
  PdfNovely,
  TramitesNovely,
} from "../images";

export const novelties = [
  {
    title: "CobieneApp",
    image: CobieneAppNovelty,
    date: moment("2022-12-20").format("DD / MMMM / YYYY"),
    link: "https://play.google.com/store/apps/details?id=com.servitec.cobiene",
    content: "Se lanzo la aplicacion del cobiene.",
  },
  {
    title: "CobieneWeb",
    image: CobieneWebNovelty,
    date: "02 de diciembre del 2022",
    link: "https://cobiene-mil-pe.web.app/",
    content: "Se lanzo la pagina web de cobiene.",
  },
  {
    title: "Cobiene Tramites",
    image: TramitesNovely,
    date: "10 de octubre del 2022",
    link: "https://tramites.cobiene.mil.pe/",
    content: "Ya esta disponible la nueva pagina de tramites del cobiene.",
  },
  {
    title: "Cobiene Catalogo",
    image: CatalogoNovely,
    date: "2 de diciembre del 2022",
    link: "https://cobiene-mil-pe.web.app/flip-book",
    content:
      "Esta disponible el nuevo catalogo del cobiene con los ultimo convenios.",
  },
  {
    title: "Cobiene premios",
    image: ImageGalleyHome1,
    date: "5 de febrero del 2023",
    content:
      "Un merecido reconocimiento, al personal militar que laboró en el Circulo Militar de S.T.S del Ejército del Perú.",
  },
  {
    title: "Memoria Anual Consejo de Vigilancia",
    image: PdfNovely,
    date: "16 de marzo del 2023",
    link: "https://drive.google.com/file/d/1itB1RhqRH1XedfpwGjxBKxeinPKHNa3z/view?usp=sharing",
    content:
      "El Ejército del Perú y la Asociación Círculo \n" +
      "Memoria Anual Consejo de Vigilancia.",
  },
  {
    title: "Facebook",
    image: FacebookSede,
    date: "16 de marzo del 2023",
    link: "https://www.facebook.com/ACMSTS",
    content:
      "Facebook de la sede para estar al tanto de los ultimos cambios y actulizaciones.",
  },
];
