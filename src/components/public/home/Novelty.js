import React from 'react';
import styled from "styled-components";
import {CatalogoNovely, CobieneAppNovelty, CobieneWebNovelty, TramitesNovely} from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

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
        content: "Esta disponible el nuevo catalogo del cobiene con los ultimo convenios."}]

export const Novelty = () => {
    return (
        <Container>


            {CobieneNovelty.map((itemNovelty,index)=>((

                       <div className="wrapper-noveltys" key={index}>
                           <a href={itemNovelty.link} target="_blank"
                              rel="noreferrer" >
                               <img src={itemNovelty.image} alt={itemNovelty.title}/>
                               <div className="wrapper-info">
                                   <h3>{itemNovelty.fecha}</h3>
                                   <h2>{itemNovelty.content}</h2>
                               </div>
                           </a>
                       </div>

            )))}

        </Container>
    );
};

// export default Novelty;
const Container = styled.div`
  margin-left: 3.5rem;
  margin-top: 2.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media(max-width: 480px){
    grid-template-columns: 1fr;
    margin-left: 0;
    margin-top: 0.5rem;
  }
.wrapper-noveltys{
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
  margin-left: 1rem;
  //align-items: center;
  @media(max-width: 480px){
    margin-left: 0;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .wrapper-info{
    margin-left: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 0.5rem;
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