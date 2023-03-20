import React, {useState} from "react";
import styled, {css} from "styled-components";
import ModalAntd from "antd/lib/modal/Modal";
import {mediaQuery} from "../../../styles/constants/mediaQuery";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useFormUtils} from "../../../hooks";
import {Form} from "./Form";
import {defaultTo} from "lodash";
import {InputNumber} from "./InputNumber";
import {firestore, querySnapshotToArray,collectionRef} from '../../../firebase'
import {notification} from "./notification";
import {useFormContact} from '../../../providers';
import {ButtonPopUp} from './ButtonPopUp';


export const FormConsult = () => {
    const [users,setUsers]=useState([]);
    const { visibleFormContact, setVisibleFormContact } = useFormContact();

    const handleVisibleFormContact = () =>
        setVisibleFormContact(!visibleFormContact);


    const [loadingContact, setLoadingContact] = useState(false);

    const schema = yup.object({
        dni: yup.number().required(),
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

            // const valueCollection = await firestore.collection("users").where("document.number","==", formData.dni.toString())

            const valueFormDataDni = formData.dni.toString();
            /*await firestore.collection("users").where("document.number","==", valueFormDataDni).onSnapshot((snapshot)=> setUsers(querySnapshotToArray(snapshot)))
             const [number]= users;*/
                const querySnapshot = await collectionRef.where("document.number", '==', valueFormDataDni).get();
            const resulConsult = !querySnapshot.empty;
                console.log(resulConsult)
            if (resulConsult) {
                notification({type: "success", title: "Eres Socio"});
            }else {
                notification({ type: "error", title: "No eres Socio" });
            }

            // console.log(number.document.number)
            /*if(valueFormDataDni === number.document.number) {
               notification({type: "success", title: "Eres Socio"});
            }else{
                notification({ type: "error", title: "No eres Socio" });
            }*/
            resetContactForm();
            setUsers([]);
            handleVisibleFormContact();

        } catch (e) {
            console.log("No eres Socio:", e);
            notification({ type: "error" });
        } finally {
            setLoadingContact(false);
        }
    };

    console.log("users->",users);

    const resetContactForm = () =>
        reset({
            dni: "",
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
               <h2>Escriba su DNI para la consulta:</h2>
                <Controller
                    name="dni"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value, name } }) => (
               <InputNumber
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
                {/*{(users === []) ? null : <h2>Eres Socio</h2>}*/}

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
