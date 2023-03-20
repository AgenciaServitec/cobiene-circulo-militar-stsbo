import React from 'react';
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import {SvgEmail, SvgLocation, SvgPhone} from "../../../images";

 export const Contact = ({ubicacion}) => {
    return (
        <Container id="contact">
           <h1>CONTACTANOS</h1>
            <div className="wrapper-contact">
                <div className="items-contacts">
                    <div className="item-contact">
                        <div className="icon">
                            <SvgPhone width="80px" color="#000000"/>
                        </div>
                        <div className="content">
                            <a href="tel:+51 0131717" target="_blank" rel="noreferrer">
                                013171700
                            </a>
                            <p> Lun-Dom 9am-6pm</p>
                        </div>
                    </div>

                    <div className="item-contact">
                        <div className="icon">
                            <SvgEmail width="80px"  color="#000000"/>
                        </div>
                        <div
                            className="content"
                        >
                            <a
                                href="mailto:contactos@servitec-peru.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                contacto@cobiene.mil.pe
                            </a>
                            <p>Soporte en Linea</p>
                        </div>
                    </div>

                    <div className="item-contact">
                        <div className="icon">
                            <SvgLocation width="80px" color="#000000" />
                        </div>
                        <div
                            className="content"

                        >
                            <a
                                href="https://goo.gl/maps/EiSoB4t5tQ3rG5YU6"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Chorrillos, Perú {ubicacion}
                            </a>
                            <p>Circulo Militar de Supervisores, Técnicos y SubOficiales</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-iframe">
                <iframe title = "map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.182822107938!2d-77.02182883518618!3d-12.16795324138669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b784f6fb93df%3A0x5907a77c2f4a4c66!2sC%C3%ADrculo%20Militar%20de%20Supervisores%20T%C3%A9cnicos%20y%20Suboficiales%20del%20Ej%C3%A9rcito%20del%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1673904843012!5m2!1ses!2spe"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
        </Container>
    );
};


 const Container = styled.div`
  width: 100%;
  height: auto;
   text-align: center;
   padding: 2.5rem;
  h1{
  font-size:3.5rem;
  color:black;
    @media(max-width: 480px){
      font-size:2.5rem;
    }
    
  }
  .wrapper-contact{
  display:grid;
    grid-template-columns: 1fr 1fr;
    @media(max-width: 480px){
      grid-template-columns: 1fr;
    }
    .items-contacts {
      display: grid;
      //grid-template-areas: 1fr;
      justify-items: center;
      @media(max-width: 480px){
        padding-right: 17rem;
      }

      ${mediaQuery.minTablet} {
        //grid-template-areas: 1fr 1fr 1fr;
      }

      .item-contact {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;
        ${mediaQuery.minTablet} {
          grid-template-columns: 1fr auto;
        }
        .icon {
          font-size: 3rem;
        }
        .content {
          text-align: center;
          line-height: 3rem;
          p {
            opacity: 0.9;
          }
          a {
            font-size: 1.5rem;
            color: black;
          }
          a:hover {
            color: #292929;
          }
        }
      }
    }
    .wrapper-iframe{
      height: auto;
     

    
      iframe{
        width: 600px;
        height: 450px;

        @media(max-width: 480px){
          width: auto;
          height: 20rem;
          display: flex;
        }
        
      }
      @media(max-width: 480px){
        width: 3rem;
        height: 19rem;
      }
    }
 }
   
`;


