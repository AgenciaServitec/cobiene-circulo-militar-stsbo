import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import {useFormContact} from '../../../providers';
import { useNavigate } from "react-router";

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
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <a href="#about-us">Nosotros</a>
        {/*<a href="#about-us">Nosotros</a>*/}
      </MenuItem>
      <MenuItem onClick={() => onSetVisibleDrawer(false)}>
        <a href="#services">Servicios</a>
      </MenuItem>
      {
        sectionVideo ? (<MenuItem onClick={onVideosAndCloseDrawer} >
          <a>Videos de la Sede</a>
        </MenuItem>) : null
      }
      <MenuItem
        onClick={() => {
          handleVisibleFormContact();
        }}
      >
        <span>Contácto</span>
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
