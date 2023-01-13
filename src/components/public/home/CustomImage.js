import React, {useState} from 'react';
import styled from 'styled-components';
import {Services1, Services2, Services3, Services4} from "../../../images";

export const CustomImage = () => {
    const imgs=[{id:0,value:Services1},{id:1, value: Services2},{id:2, value: Services3},{id:3,value:Services4}]

    const [sliderData, setSliderData]=useState(imgs[0])

    const handleClick=(index)=>{
        console.log(index);
        const slider = imgs[index];
        setSliderData(slider);
    }

    return (
        <Container>

            <div className="wrapper-slider">
                <img src={sliderData.value} height="300" width="500"/>
                <div className="conten-imgs">
                    {
                    imgs.map((img,i)=>
                        <div className="conten-img">
                           <div className="wrapper-img">
                               <img className={sliderData.id===i ? "clicked" : "not-clicked"} key={i} src={img.value} onClick={()=>handleClick(i)} height="70" width="100"/>
                           </div>
                        </div>
                    )
                }</div>
            </div>
        </Container>
    );
};
const Container = styled.div`
text-align: center;
  .wrapper-slider{
    //display: grid;
    //grid-template-rows: 1fr 1fr;
    .conten-imgs{
      justify-content: center;
      display: flex;
      padding: 2em;
      .conten-img{
        padding-left: 0.5rem;

        .wrapper-img{
          position: relative;
          margin: auto;
          //box-shadow: 2px 2px 5px #999;
          //.wrapper-img:before{
          //  content: "";
          //  width: 100%;
          //  height: 100%;
          //  position: absolute;
          //  top: 0;
          //  right: 0;
          //  background: black;
          //}
          .clicked{
            
          }
          .not-clicked{
            opacity: 0.10;
            transition: all 0.2s ease-in-out;
          }
        }
        
      }
      
    }
  }
`