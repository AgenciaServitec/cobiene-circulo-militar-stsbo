import React, { useState } from "react";
import styled, { css } from "styled-components";
import ModalAntd from "antd/lib/modal/Modal";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../hooks";
import { Input } from "./Input";
import { Form } from "./Form";
import { defaultTo } from "lodash";
import { phoneCodes } from "../../../data-list";
import { Select } from "./Select";
import { InputNumber } from "./InputNumber";
import { TextArea } from "./TextArea";
import { notification } from "./notification";
import { currentConfig } from "../../../firebase";
import { useNavigate } from "react-router";
import { Button } from "./Button";
import { useDevice } from "../../../hooks";
import {useFormContact} from '../../../providers';
import {ButtonPopUp} from './ButtonPopUp';

export const FormConsult = () => {
    const { visibleFormContact, setVisibleFormContact } = useFormContact();

    const handleVisibleFormContact = () =>
        setVisibleFormContact(!visibleFormContact);

    const { isMobile } = useDevice();

    const [loadingContact, setLoadingContact] = useState(false);

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        countryCode: yup.string().required(),
        phoneNumber: yup.number().required(),
        message: yup.string(),
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

    const onSubmitFetchContacts = async (formData) => {
        try {
            setLoadingContact(true);
            const contact = mapContactData(formData);

            const response = await fetchSendEmail(contact);

            if (!response.ok) throw new Error(response.statusText);

            notification({ type: "success", title: "Enviado exitosamente" });

            resetContactForm();

            handleVisibleFormContact();
        } catch (e) {
            console.log("ErrorEmailSend:", e);
            notification({ type: "error" });
        } finally {
            setLoadingContact(false);
        }
    };

    const fetchSendEmail = async (contact) =>
        await fetch(`${currentConfig.sendingEmailsApi}/generic/contact`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": null,
                "content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(contact),
        });

    const mapContactData = (formData) => ({
        contact: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: {
                number: formData.phoneNumber,
                countryCode: formData.countryCode,
            },
            message: formData.message,
            hostname: window.location.hostname || "cobiene-352004.web.app",
        },
    });

    const resetContactForm = () =>
        reset({
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "+51",
            phoneNumber: "",
            message: "",
        });

    return (
        <ModalComponent
            title={<h3 style={{ margin: "0" }}>Saber si soy Socio</h3>}
            visible={visibleFormContact}
            onOk={() => handleVisibleFormContact()}
            onCancel={() => handleVisibleFormContact()}
            footer={null}
        >
            <Form onSubmit={handleSubmit(onSubmitFetchContacts)}>
               <h2>Escriba su DNI para la consulta:</h2>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value, name } }) => (
               <Input
                   label="Ingrese DNI"
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
      //font-family: "Encode Sans",Arial,sans-serif;

      .ant-modal-title {
        color: ${({theme}) => theme.colors.font1};

        h2 {
          margin: 0;
        }
      }
    }

    .ant-modal-close {
      color: ${({theme}) => theme.colors.light};
    }

    .ant-modal-body {
      ${ModalBackground};
      h2{
        font-family: "Encode Sans",Arial,sans-serif;
      }
      
    }
  }
`;
