import React from 'react';
import {Gallery, VideosSedes} from "../../components/public/home";
import styled from "styled-components";
import {
    Chorrillos1,
    Chorrillos2,
    Chorrillos3,
    Chorrillos4,
    Chorrillos5,
    Chorrillos6,
    Chorrillos7,
    BackgroundChorrillos,
    VideoChorrillos1,
    VideoChorrillos2,
    VideoChorrillos3,
    VideoChorrillos4,
    VideoChorrillos5,
    VideoChorrillos6,
    VideoChorrillos7,
    VideoChorrillos8,
    VideoChorrillos9,
    VideoChorrillos10,
    VideoChorrillos11,
    VideoChorrillos12,
    VideoChorrillos13,
    VideoChorrillos14,
    VideoChorrillos15,
    VideoChorrillos16,
} from '../../images';
import {Contact, InitialComponent} from "../../components/public";

export const PageSedeChorrillos = ({videosSedes}) => {


    const images = [
        { src:Chorrillos1, title:"Restaurantes"},
        {src:Chorrillos2, title: "Piscina"},
        {src:Chorrillos3, title:"Áreas Deportivas"},
        {src:Chorrillos4,title: "Áreas Infantiles"},
        {src:Chorrillos5, title: "Zona Sociales"},
        {src:Chorrillos6, title:"Deportivas"},
        {src:Chorrillos7, title:"Deportivas"},
        {src:Chorrillos3, title:"Áreas Deportivas"},
    ];

    const videos = [
        {src: VideoChorrillos1, title: "video2"},
        {src: VideoChorrillos2, title: "video2"},
        {src: VideoChorrillos3, title: "video2"},
        {src: VideoChorrillos4, title: "video2"},
        {src: VideoChorrillos5, title: "video2"},
        {src: VideoChorrillos6, title: "video2"},
        {src: VideoChorrillos7, title: "video2"},
        {src: VideoChorrillos8, title: "video2"},
        {src: VideoChorrillos9, title: "video2"},
        {src: VideoChorrillos10, title: "video2"},
        {src: VideoChorrillos11, title: "video2"},
        {src: VideoChorrillos12, title: "video2"},
        {src: VideoChorrillos13, title: "video2"},
        {src: VideoChorrillos14, title: "video2"},
        {src: VideoChorrillos15, title: "video2"},
        {src: VideoChorrillos16, title: "video2"},

    ]

    return (
        <>
            <Container>
                <InitialComponent bgImage={BackgroundChorrillos} description=""/>

                {
                    videosSedes ? (<VideosSedes videos={videos} title="NUESTROS RECUERDOS" />) : ( <Gallery images={images} title="ZONAS RECREATIVAS"/>)
                }
                <Contact ubicacion="chorrillos"/>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
  height: auto;
  background: white;
`;