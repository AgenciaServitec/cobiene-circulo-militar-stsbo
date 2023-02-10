import React from 'react';
import styled from "styled-components";
import {CatalogoNovely, CobieneAppNovelty, CobieneWebNovelty, ImageGalleyHome1, TramitesNovely} from "../../../images";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CobieneNovelty = [
    {
        title: "CobieneApp",image: CobieneAppNovelty ,
        fecha:"20 de diciembre del 2022",
        link: "https://play.google.com/store/apps/details?id=com.servitec.cobiene",
        content: "Se lanzo la aplicacion del cobiene."
    },
    {
        title: "CobieneWeb", image: CobieneWebNovelty ,
        fecha:"02 de diciembre del 2022",
        link: "https://cobiene-mil-pe.web.app/",
        content: "Se lanzo la pagina web de cobiene."
    },
    {
        title: "Cobiene Tramites",image: TramitesNovely ,
        fecha:"10 de octubre del 2022",
        link: "https://tramites.cobiene.mil.pe/",
        content: "Ya esta disponible la nueva pagina de tramites del cobiene."
    },
    {
        title: "Cobiene Catalogo",
        image: CatalogoNovely ,
        fecha:"2 de diciembre del 2022",
        link: "https://cobiene-mil-pe.web.app/flip-book",
        content: "Esta disponible el nuevo catalogo del cobiene con los ultimo convenios."},
    {
        title: "Cobiene premios",image: ImageGalleyHome1 ,
        fecha:"5 de febrero del 2023",
        content: "Un merecido reconocimiento, al personal militar que laboró en el Circulo Militar de S.T.S del Ejército del Perú."
    }
]





// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }
//
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }

export const Novelty = () => {
    const settings = {

        dots: true,
        infinite: true,
        speed:300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container>

<Slider {...settings}>
            {CobieneNovelty.map((itemNovelty,index)=>((


                           <div className="wrapper-noveltys" key={index}>
                           <a
                               href={itemNovelty.link && itemNovelty.link}
                               target={itemNovelty.link && "_blank"}
                              rel={itemNovelty.link && "noreferrer"} >
                               <img src={itemNovelty.image} alt={itemNovelty.title}/>
                               <div className="wrapper-info">
                                   <h3>{itemNovelty.fecha}</h3>
                                   <h2>{itemNovelty.content}</h2>
                               </div>
                           </a>
                       </div>


            )))}
</Slider>

        </Container>
    );
};


const Container = styled.div`
  width: 95%;
  
  .slick-slide > div{
    margin: 10px;
  }
  .slick-slide {
    margin: -0px;
  }
  
  .wrapper-noveltys{
      //padding-left: 2rem;
      cursor: pointer;
      background: #1a1a1a;
      border-radius: 1rem;
      width: 17rem;
      //height: 19rem;
      //display: flex;
      position: relative;
      display: inline-block;
      //text-align: center;
      flex-direction: column;
      //justify-content: center;
      //margin-left: 1rem;
      //align-items: center;
      @media(max-width: 480px){
        margin-left: 0;
      }
      img {
        width: 100%;
        height: 15.5rem;
        border-radius: 5px;
      }
      .wrapper-info{
height: 9rem;
        margin-left: 1.5rem;
        margin-top: 1.5rem;
        margin-right: 1rem;
        h3{
          font-size: .8rem;
          font-weight: 100;
        }
        h2{
          font-size: 1.1rem;
          font-family: "Encode Sans",Arial,sans-serif;
        }
      }
    }
  
    
  
`;