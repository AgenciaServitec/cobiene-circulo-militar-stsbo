import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const CardSede = ({ banner, title, titleLarge, url, externalUrl }) => {
  const navigate = useNavigate();

  const onNavigateTo = () => {
    if (url) return navigate(url);

    return window.open(externalUrl, "_blank");
  };

  return (
    <Container>
      <div className="item-picture" onClick={() => onNavigateTo()}>
        <img src={banner} alt="ImageBanner" />
        {title && <h2 className="item-department-name">{title}</h2>}
      </div>

      <div className="item-title-card">
        <h4> {titleLarge} </h4>
      </div>
      <div className="footer-card">
        <div className="blog-divider-wrapper">
          <div className="blog-divider" />
        </div>
        <div className="item-bottom">
          <div className="item-more">
            <div className="bottom-txt">
              {externalUrl && (
                <a href={externalUrl} target="_blank" rel="noreferrer">
                  <h5>Web url</h5>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: radial-gradient(100% 100% at 50.52% 0%, #86895d 0%, #000000 100%);
  box-shadow: 0 10px 20px rgb(0 0 0 / 5%);
  border-radius: 8px;
  min-height: 25rem;
  max-height: 25rem;
  width: 100%;
  max-width: 20em;
  overflow: hidden;

  .item-picture {
    position: relative;
    transition: all 0.3s ease;
    z-index: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:before {
      content: "";
      background: rgba(0, 0, 0, 0.35);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    img {
      width: 100%;
      height: 14rem;
      object-fit: fill;
    }

    .item-department-name {
      color: #fff;
      font-size: 2.3rem;
      text-align: center;
      position: absolute;
      margin: auto;
      text-transform: uppercase;
      font-family: "Intro Demo", sans-serif;
    }
  }

  .item-title-card {
    width: 100%;
    height: auto;
    min-height: 5.5rem;
    padding: 1rem 0.7rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h4 {
      margin: 0;
    }
  }

  .footer-card {
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
    padding: 26px 20px;
    color: #ffffff;

    .blog-divider-wrapper {
      position: relative;
      width: 100%;
      height: 10px;
      z-index: 0;

      &:after {
        content: " ";
        position: absolute;
        top: 0;
        left: 93%;
        bottom: 0;
        width: 75px;
        height: 1px;
        background-color: #b3b6b7;
        z-index: 1;
        -webkit-transform: rotate(47deg);
        transform-origin: 0% 0%;
        transition: all 0.3s ease;
      }

      .blog-divider {
        &:before {
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 65px;
          height: 6px;
          background-color: #b3b6b7;
          z-index: 1;
          transition: all 0.3s ease;
        }

        &:after {
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 93%;
          height: 1px;
          background-color: #b3b6b7;
          z-index: 1;
          transition: all 0.3s ease;
        }
      }
    }

    .item-bottom {
      width: 100%;
      height: auto;
      position: relative;

      .item-more {
        position: relative;

        .bottom-txt {
          margin: 1.7rem 0 0 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          a,
          span {
            display: flex;
            align-items: center;
            color: #fff;
            margin-right: 0.9rem;
            cursor: pointer;

            h5 {
              margin: 0 0.3rem 0 0;
            }
          }
        }
      }
    }
  }
`;
