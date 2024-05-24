import {
  CobieneAppNovelty,
  CobieneWebNovelty,
  ImgcallGeneralMeeting,
  ImgCard,
  ImgDayFather,
  ImgDayMother,
  ImgFootballFieldInauguration,
  ImgGalaDinnerStsStaffDay,
  ImgImposicionCard,
  ImgInterpromotionsOpeningChampionship,
  ImgLaborDay,
  ImgPersonnelTraining,
  ImgSwearingBoardDirectorsAfSurvelillance,
  ImgWorks,
  portadaFiestas,
  TramitesNovely,
} from "../images";

export const novelties = [
  {
    title: "Almuerzo",
    date: "23 de Julio del 2023",
    content: "Almuerzo de Camaderia por Fiestas Patrias",
    linkRouter: "/flip-book/NationalHolidays",
    image: portadaFiestas,
  },
  {
    title: "Evento Imposicion",
    date: "Julio del 2023",
    content:
      "Imposición de medalla del presidente del consejo directivo TCOJS Caminada Medina Segundo Emilio",
    linkRouter: "/flip-book/imposicionMedalla",
    image: ImgImposicionCard,
  },
  {
    title: "Evento Socios",
    date: "24 de Junio del 2023",
    content: "Difusión para la inscripción de socios del circulo militar.",
    linkRouter: "/flip-book/eventDeportivo",
    image: ImgCard,
  },
  {
    title: "Dia del padre",
    date: "18 de Junio del 2023",
    content:
      "Supervisores Técnicos y SubOficiales del Ejercito disfrutaron evento por el día del padre.",
    linkRouter: "/flip-book/fatherDay",
    image: ImgDayFather,
  },
  {
    title: "Día De La Madre",
    date: "12 de Mayo del 2024",
    content: "Se realizó evento por el día de la Madre",
    linkRouter: "/flip-book/motherDay",
    image: ImgDayMother,
  },
  {
    title: "CobieneApp",
    image: CobieneAppNovelty,
    date: "12 de Diciembre del 2022",
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
    title: "Convocatoria de Asamblea General",
    date: "02 de marzo del 2024",
    content:
      "Se llevó a cabo la Convocatoria de Asamblea General del AF-2024 al AF-2025",
    linkRouter: "/flip-book/callGeneralmeeting",
    image: ImgcallGeneralMeeting,
  },
  {
    title: "Juramentación del Consejo Directivo y Vigilancia AF 2024 - 2025",
    date: "02 de marzo del 2024",
    content: "Juramentación del Consejo Directivo y Vigilancia AF 2024 - 2025",
    linkRouter: "/flip-book/swearingBoardDirectorsAfSurvelillance",
    image: ImgSwearingBoardDirectorsAfSurvelillance,
  },
  {
    title:
      "Cena de Gala , por el Dia Del Personal De Supervisores, Técnicos y Suboficiales",
    date: "02 de marzo del 2024",
    content:
      "Cena de Gala , por el Dia Del Personal De Supervisores, Técnicos y Suboficiales",
    linkRouter: "/flip-book/galaDinnerStsStaffDay1",
    image: ImgGalaDinnerStsStaffDay,
  },
  {
    title: "Dia del Trabajo",
    date: "29 de abril del 2024",
    content: "Celebración del Dia del Trabajo",
    linkRouter: "/flip-book/laborDay",
    image: ImgLaborDay,
  },
  {
    title:
      "Capacitación a todo el personal del CM - STS sobre el Manejo De Extintores - Abril 2024",
    date: "02 de marzo del 2024",
    content:
      "Capacitación a todo el personal del CM - STS sobre el Manejo De Extintores - Abril 2024",
    linkRouter: "/flip-book/personnel-training",
    image: ImgPersonnelTraining,
  },
  {
    title:
      "Campeonato Apertura Inter Promociones, con motivo de la conmemoración el “Día De Los Supervisores, Técnicos Y Suboficiales”.",
    date: "20 de abril del 2024",
    content:
      "Campeonato Apertura Inter Promociones, con motivo de la conmemoración el “Día De Los Supervisores, Técnicos Y Suboficiales.",
    linkRouter: "/flip-book/interpromotions-opening-championship",
    image: ImgInterpromotionsOpeningChampionship,
  },
  {
    title: "Obras de la ACM STS",
    date: "02 de marzo del 2024",
    content: "Obras de la ACM STS",
    linkRouter: "/flip-book/works",
    image: ImgWorks,
  }
  /*{
    title: "Cobiene Catalogo",
    image: CatalogoNovely,
    date: "2 de diciembre del 2022",
    link: "https://cobiene-mil-pe.web.app/flip-book",
    content:
      "Esta disponible el nuevo catalogo del cobiene con los ultimo convenios.",
  },*/
  // {
  //   title: "Cobiene premios",
  //   image: ImageGalleyHome1,
  //   date: "5 de febrero del 2023",
  //   content:
  //     "Un merecido reconocimiento, al personal militar que laboró en el Circulo Militar de S.T.S del Ejército del Perú.",
  // },
  /* {
    title: "Memoria Anual Consejo de Vigilancia",
    image: PdfNovely,
    date: "16 de marzo del 2023",
    link: "https://drive.google.com/file/d/1itB1RhqRH1XedfpwGjxBKxeinPKHNa3z/view?usp=sharing",
    content:
      "El Ejército del Perú y la Asociación Círculo \n" +
      "Memoria Anual Consejo de Vigilancia.",
  },*/
  /*{
    title: "Facebook",
    image: FacebookSede,
    date: "16 de marzo del 2023",
    link: "https://www.facebook.com/ACMSTS",
    content:
      "Facebook de la sede para estar al tanto de los ultimos cambios y actulizaciones.",
  },*/
];
