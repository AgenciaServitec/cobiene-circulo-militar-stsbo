import React from 'react';
import styled from "styled-components";

 export const Contact = () => {
    return (
        <Container>
           <h1>prueba numero
           numero 1</h1>
            <div className="wrapper-contact">
                <div><h2>CONTENIDO DE CONTACTO</h2></div>
            <iframe title = "map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.182822107938!2d-77.02182883518618!3d-12.16795324138669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b784f6fb93df%3A0x5907a77c2f4a4c66!2sC%C3%ADrculo%20Militar%20de%20Supervisores%20T%C3%A9cnicos%20y%20Suboficiales%20del%20Ej%C3%A9rcito%20del%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1673904843012!5m2!1ses!2spe"
                width="600" height="450"  allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
        </Container>
    );
};


 const Container = styled.div`
  width: 100%;
  height: auto;
  background: #black; 
  h1{
  font-size:2.5rem;
  color:black;
  }
  .wrapper-contact{
 display:flex;
 }
   
`;


