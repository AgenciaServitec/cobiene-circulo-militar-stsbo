import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const ItemServices = ({
  img,
  title,
  content,
  onClick,
  onClickVisibleFormContact,
}) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={
        onClick
          ? () => navigate(`/${onClick}`)
          : () => {
              onClickVisibleFormContact(true);
            }
      }
    >
      {/*<Container>*/}
      <img src={img} width="100%" height="100%" alt={title} />
      <div className="content-text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  background: #1a1a1a;
  border-radius: 1rem;
  width: 28rem;
  //display: flex;
  position: relative;
  display: inline-block;
  text-align: center;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  //padding: 1rem 0.5rem;
  box-shadow: 3px 5px 5px rgba(18, 18, 19, 0.8);
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .content-text {
    //padding: 1.5rem 0.5rem;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out ;
    &:hover {
      top: 70%;
      transition: all 0.2s ease-in-out ;
    }
    h3 {
      font-size: 2.6rem;
      font-weight: 700;
      text-align: center;
      //color: rgba(255, 255, 255, .8);
      font-family: "Intro Demo", sans-serif;
    }

    p {
      padding: 0 0.5rem;
      font-size: 0.9rem;
      text-align: center;
      color: #abb6c2;
      font-family: "Intro Demo", sans-serif;
      transform: translateY(1rem);
    }
  }
`;
