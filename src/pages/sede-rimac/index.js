import React from 'react';
import {Rimac1, Services1,Rimac2,Rimac3,Rimac4,Rimac5,Rimac6} from "../../images";
import {InitialComponent} from "../../components/public";
import {Gallery} from "../../components/public/home/Gallery";
import styled from "styled-components";

export const PageSedeRimac = () => {


    const images=[
        {
            src:Rimac1, title:"Restaurantes"
        },
        {
            src:Rimac2,title: "Piscinas"
        },
        {
            src:Rimac3,title: "Piscinas"
        },
        {
            src:Rimac4,title: "Piscinas"
        },
        {
            src:Rimac5,title: "Piscinas"
        },
        {
            src:Rimac6,title: "Piscinas"
        },

    ]
    return (
        <div>
            <Container>
                <InitialComponent bgImage={Services1}/>
                <Gallery images={images} title="Sede Chorrillos"/>
            </Container>
        </div>
    );
};


const Container = styled.div`
    width: 100%;
  height: auto;
  background: white;
`;