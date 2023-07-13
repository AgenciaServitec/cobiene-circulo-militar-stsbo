import React, { useState } from "react";
import styled, { css } from "styled-components";
import ModalAntd from "antd/lib/modal/Modal";
import { firestore } from "../../../firebase";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../hooks";
import { Form } from "./Form";
import { defaultTo } from "lodash";
import { InputNumber } from "./InputNumber";
import { notification } from "./notification";
import { useFormContact } from "../../../providers";
import { ButtonPopUp } from "./ButtonPopUp";

export const FormConsult = () => {
  const { visibleFormContact, setVisibleFormContact } = useFormContact();

  const handleVisibleFormContact = () =>
    setVisibleFormContact(!visibleFormContact);

  const [loadingContact, setLoadingContact] = useState(false);

  const schema = yup.object({
    cip: yup.number().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onSubmitUser = async (formData) => {
    try {
      setLoadingContact(true);

      const cip = formData.cip;
      const usersRef = firestore.collection("users");

      const query = usersRef.where("documents.cip", "==", cip);
      const result = await query.get();

      !result.empty
        ? notification({ type: "success", title: "Eres Socio" })
        : notification({ type: "error", title: "No eres Socio" });

      resetContactForm();

      handleVisibleFormContact();
    } catch (e) {
      console.log("Error:", e);
      notification({ type: "error->" });
    } finally {
      setLoadingContact(false);
    }
  };

  const resetContactForm = () =>
    reset({
      cip: "",
    });

  return (
    <ModalComponent
      title={<h3 style={{ margin: "0" }}>Saber si soy Socio</h3>}
      visible={visibleFormContact}
      onOk={() => handleVisibleFormContact()}
      onCancel={() => handleVisibleFormContact()}
      footer={null}
    >
      <Form onSubmit={handleSubmit(onSubmitUser)}>
        <h2>Escriba su CIP para la consulta:</h2>
        <Controller
          name="cip"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value, name } }) => (
            <InputNumber
              label="Ingrese CIP"
              name={name}
              value={value}
              onChange={onChange}
              error={error(name)}
              required={required(name)}
            />
          )}
        />
        <ButtonPopUp
          type="primary"
          margin="0"
          block
          htmlType="submit"
          loading={loadingContact}
          disabled={loadingContact}
        >
          Consultar
        </ButtonPopUp>
      </Form>
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
  min-height: 100vh;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  top: 0;
  z-index: 9999999 !important;

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
    }
  }
`;
