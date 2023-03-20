import React from 'react';
import {
    Rimac1,
    Rimac2,
    Rimac3,
    Rimac4,
    Rimac5,
    Rimac6,
    Rimac7,
    Rimac8,
    Rimac9,
    Rimac10,
    Rimac11,
    Rimac12,
    Rimac13,
    Rimac14,
    Rimac15,
    Rimac16,
    Rimac17,
    Rimac18,
    Rimac19,
    Rimac20,
    Rimac21,
    Rimac22,
    BackgroundRimac,VideoChorrillos18} from "../../images";
import {Contact, InitialComponent, AboutUs} from "../../components/public";
import {Gallery} from "../../components/public/home/Gallery";
import styled from "styled-components";

export const PageSedeRimac = () => {

    const images=[
        {
            src:Rimac1, title:"Areas de Comidas"
        },
        {
            src:Rimac2,title: "Piscinas Recreacionales"
        },
        {
            src:Rimac3,title: "Piscinas"
        },
        {src:Rimac4,title: "Piscinas"},
        {src:Rimac5,title: "Piscinas"},
        {src:Rimac6,title: "Piscinas"},
        {src:Rimac7,title: "Piscinas"},
        {src:Rimac8,title: "Sede"},
        {src:Rimac9,title: "Piscinas"},
        {src:Rimac10,title: "Talleres Recreacionales"},
        {src:Rimac11,title: "Talleres"},
        {src:Rimac12,title: "Areas Sociales"},
        {src:Rimac13,title: "Nuestros Talleres"},
        {src:Rimac14,title: "Recreacion"},
        {src:Rimac15,title: "Talleres Recreacionales"},
        {src:Rimac16,title: "Nuesta Sede"},
        {src:Rimac17,title: "Areas Deportivas"},
        {src:Rimac18,title: "Piscinas"},
        {src:Rimac19,title: "Talleres Recreacionales"},
        {src:Rimac20,title: "Areas Sociales"},
        {src:Rimac21,title: "Areas Sociales"},
        {src:Rimac22,title: "Talleres Recreacionales"},
    ]
    return (
        <div>
            <Container>
                <InitialComponent bgImage={BackgroundRimac} description=""/>
                <AboutUs src={VideoChorrillos18} title="Nosotros-Sede Rimac" styles={{padding: "2rem 0 2rem 0", grid:"60% 40%"}} />
                <Gallery images={images} title="ZONA RECREATIVA" background="#efefef"/>
                <Contact ubicacion="chorrillos"/>
            </Container>
        </div>
    );
};


const Container = styled.div`
    width: 100%;
  height: auto;
  background: white;
`;