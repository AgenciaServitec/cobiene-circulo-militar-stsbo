import React from 'react';
import {Gallery} from "../../components/public/home/Gallery";
import styled from "styled-components";
import {
    Chorrillos1,
    Chorrillos2,
    Chorrillos3,
    Chorrillos4,
    Chorrillos5,
    Chorrillos6,
    Chorrillos7,
    BackgroundChorrillos
} from '../../images';
import {InitialComponent} from "../../components/public";

export const PageSedeChorrillos = () => {

    const images = [
        { src:Chorrillos1, title:"Restaurantes"},
        {src:Chorrillos2, title: "Piscina"},
        {src:Chorrillos3, title:"Áreas Deportivas"},
        {src:Chorrillos4,title: "Áreas Infantiles"},
        {src:Chorrillos5, title: "Zona Sociales"},
        {src:Chorrillos6, title:"Deportivas"},
        {src:Chorrillos7, title:"Deportivas"},
    ];

    return (
        <>
            <Container>
                <InitialComponent bgImage={BackgroundChorrillos} description=""/>
                <Gallery images={images} title="Sede Chorrillos"/>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
  height: auto;
  background: white;
`;