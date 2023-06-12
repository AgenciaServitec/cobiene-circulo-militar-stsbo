import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import {useFormContact} from '../../../providers';
import { useNavigate, Navigate } from "react-router";

export const Drawer = ({
  visibleDrawer,
  onSetVisibleDrawer,
  onVideosSedes,
  sectionVideo,
}) => {
  const navigate = useNavigate();
  const { visibleFormContact, setVisibleFormContact } = useFormContact();

  const handleVisibleFormContact = () =>
      setVisibleFormContact(!visibleFormContact);

  const onVideosAndCloseDrawer = () =>{
    onVideosSedes();
    onSetVisibleDrawer(false);
  }

  return (
    <ComponentDrawerAntd
      title={null}
      placement="right"
      onClose={() => onSetVisibleDrawer(false)}
      visible={visibleDrawer}
    >
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <span onClick={() => navigate("/")}>Inicio</span>
      </MenuItem>
      <MenuItem onClick={() => {
        onSetVisibleDrawer(false);
        navigate("/");
      }}>
        <a href="#about-us">Nosotros</a>
      </MenuItem>
      <MenuItem onClick={() => {
        onSetVisibleDrawer(false);
        navigate("/");
      }}>
        <a href="#sedes">Sedes</a>
      </MenuItem>
      <MenuItem onClick={() => {
        onSetVisibleDrawer(false);
        navigate("/galleria");
      }}>
        <span href="#services">Galeria</span>
      </MenuItem>
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <a onClick={()=>{handleVisibleFormContact()}}>SOCIO</a>
      </MenuItem>

      <MenuItem
        onClick={() => {
          onSetVisibleDrawer(false);
          navigate("/galleria");
        }}
      >
        <a href="#contact">Contácto</a>
      </MenuItem>
    </ComponentDrawerAntd>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  color: #000;

  .ant-drawer-content-wrapper {
    width: 100% !important;
    ${mediaQuery.minTablet} {
      width: 40% !important;
    }
  }
  .ant-drawer-header {
    .ant-drawer-close {
      color: #000;
    }
  }
  .ant-drawer-header,
  .ant-drawer-content {
    background: #fff;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 1.5rem;
  a,
  span {
    cursor: pointer;
    color: #000;
    font-size: 1.7rem;
  }
`;
