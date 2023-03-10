import React from 'react';
import { VideosSedes} from "../../components/public/home";
import styled from "styled-components";
import {
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
    VideoChorrillos17,
    VideoChorrillos18,
} from '../../images';
import {Contact, InitialComponent} from "../../components/public";

export const GalleryPage = () => {

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
        {src: VideoChorrillos10, title: "video2"},
        {src: VideoChorrillos16, title: "video2"},
        {src: VideoChorrillos17, title: "video2"},
        {src: VideoChorrillos18, title: "video2"},
        {src: VideoChorrillos8, title: "video2"},
        {src: VideoChorrillos8, title: "video2"},

    ]

    return (
     <>
         <Container>
             <InitialComponent bgImage={BackgroundChorrillos} description=""/>
             <VideosSedes videos={videos} title="NUESTROS RECUERDOS" />
         </Container>
         <Contact ubicacion="chorrillos"/>
     </>
    );
};

const Container = styled.div`
    width: 100%;
  height: auto;
  background: white;
`;