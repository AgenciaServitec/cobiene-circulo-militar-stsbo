import React,{ useState} from 'react';
import styled from "styled-components";

export const Gallery = ({images=[], title}) => {

    const [model, setModel]=useState(false)
    const [imgSrc, setImgSrc] = useState("")

    const getImg = (src) =>{
        setImgSrc(src);
        setModel(true);
    }

    return (
        <Container>
            <div className={model ? "model open" : "model" } onClick={()=>setModel(false)}>
                <img src={imgSrc} alt="imgmodelopen"/>
            </div>
            <h1 className="title">{title}</h1>
            <div className="wrapper-gallery">
                {images.map((image, index)=>(
                    <div key={index} className="wrapper-image-gallery" onClick={()=>getImg(image.src)}>
                        <img loading="lazy" src={image.src} alt={image.title}/>
                        <div className="content-text">
                            <h3>{image.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const Container = styled.div`
  padding: 3rem 3rem;
  text-align: center;
  .title{
    letter-spacing: 0.3px;
    font-family: "Intro Demo", sans-serif;
    width: 100%;
    color: #F6B63E;
    font-size: 4.5rem;
  }
 .wrapper-gallery{
   position: relative;
   width: 100%;
   -webkit-column-count: 3;
   -moz-column-count: 3;
   column-count: 3;
   padding: 0.5rem 1.2rem;
   //display: flex;
   //display: grid;
   //grid-template-columns: 3fr;
   //grid-template-rows: 2fr;
   //padding: 0.5rem 1.2rem;
   //.content-text{
   //  position: absolute;
   //}
   .wrapper-image-gallery{
     //.content-text{
     //  position: absolute;
     //}
     transition: all 350ms ease;
     cursor: pointer;
     margin-bottom: 12px;
     position: relative;
     :hover{
       filter: opacity(.4);
     }
     
     .content-text{
       position: absolute;
       top:70%;
       left: 5%;
       h3{
         font-size: 2.4rem;
       }
     }
     img{
       width: 100%;
     }
   }

   @media(max-width: 991px){
       column-count: 2;
   }
   @media(max-width: 480px){
     column-count: 1;
   }
   
 }
  
  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999; 
  }
  .model.open{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  
  .model{
    img{
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      line-height: 0;
      box-sizing: border-box;
      padding: 20px 0 20px;
      margin: 0 auto;
    }
  }
  
`;