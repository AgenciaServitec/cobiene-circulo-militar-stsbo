import React from "react";
import styled, { css } from "styled-components";
import ModalAntd from "antd/lib/modal/Modal";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { defaultTo } from "lodash";
import { ImagePdfInformative } from "../../../images";

export const PdfInformative = ({ visibleModal, setVisibleModal }) => {
  const onSetVisibleModal = () => setVisibleModal(!visibleModal);

  return (
    <ModalComponent
      visible={visibleModal}
      onOk={() => onSetVisibleModal()}
      onCancel={() => onSetVisibleModal()}
      footer={null}
    >
      <img src={ImagePdfInformative} alt="" />
    </ModalComponent>
  );
};

const ModalBackground = css`
  background-color: ${({ backgroundModal, theme }) =>
    defaultTo(backgroundModal, theme.colors.basic)};
  color: ${({ theme }) => theme.colors.font2};
`;

const ModalComponent = styled(ModalAntd)`
  position: relative;
  min-width: 100vw;
  min-height: 80vh;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  top: 0;
  z-index: 9999999 !important;
    
    img{
        width: 100%;
        height: 100%;
    }

  ${mediaQuery.minTablet} {
    min-width: inherit;
    min-height: inherit;
    width: inherit;
    height: auto;
    top: 2vh;
  }

  .ant-modal-content {
    position: absolute;
    inset: 0;
    ${ModalBackground};

    .ant-modal-header {
      ${ModalBackground};
      border-bottom: 1px solid #262628;

      .ant-modal-title {
        color: ${({ theme }) => theme.colors.font1};

        h2 {
          margin: 0;
        }
      }
    }

    .ant-modal-close {
      color: ${({ theme }) => theme.colors.light};
    }

    .ant-modal-body {
      ${ModalBackground};
      h2 {
        font-family: "Encode Sans", Arial, sans-serif;
      }
        height: 90vh;
    }
  }
`;