import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHotel,
    faUtensils,
    faDumbbell,
    faBaseball,
    faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import {mediaQuery} from "../../../styles/constants/mediaQuery";
export const Services = () => {

    const contact = {
        socialsRed:[
            {icon:faHotel, name:"Hoteles"},
            {icon: faUtensils, name:"Restaurantes"},
            {icon: faBaseball, name: "Deportes"},
            {icon:faDumbbell, name:"Gimnasio"},
            {icon:faWaterLadder, name:"Recreación"},
        ],
    }

    const {socialsRed} = contact;

    return (
        <Container id="contact">
            <hr />
            <div className="content-left">
                <h2>NUESTROS SERVICIOS</h2>
                <div className="items-socials">
                    <ul>
                        {socialsRed.map((socialRed, index) => (
                            <li key={index}>
                                   <div> <a rel="noreferrer"><FontAwesomeIcon icon={socialRed.icon}/></a></div>
                                <div>
                                    <p>{socialRed.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 2.7rem 2.7rem 0 2.7rem;
  align-items: center;
  ${mediaQuery.minTablet} {
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
  }
  hr {
    height: 2px;
    width: 32%;
    background: #010a06;
    display: flex;
    margin: auto;
  }
  .content-left {
    text-align: center;
    font-size: 1rem;
    h2 {
      color: #F6B63E;
      font-weight: bolder;
      font-size: 2.5rem;
      margin-top: 4rem;
    }
    .items-socials {
      width: 100%;
      margin: 3rem auto;
      ul {
        list-style: none;
        display: flex;
        //justify-content: start;
        flex-wrap: wrap;
        position: relative;
        justify-content: center;
        li {
          text-align: center;
          margin: 0 1rem 1.7rem 2rem;
          div{
            a {
              color: white;
              font-size: 5.4rem;
              border-radius: 14rem;
              width: 10rem;
              height: 10rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background: ${({ theme }) => theme.colors.light};
            }
          }
          div{
            p {
              margin-top: 1rem;
              margin-bottom: 1em;
            }
          }
          &:last-child {
            span {
              border-right: none;
            }
          }
        }
      }
    }
  }
  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;