import { useRef, useState } from "react";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field, FormikProps } from "formik";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import * as Yup from "yup";

import { Translations } from "enums";
import Spacer from "components/atoms/Spacer";
import { useAppContext } from "hooks/useAppContext";
import Button from "components/atoms/Button";
import Modal from "components/molecules/Modal";
import { AuthModalAction } from "actions";
import { AuthModals, Routes } from "enums";

enum ModalTypes {
  LOGIN,
  REGISTER,
}
const StyledButton = styled(Button)`
  width: 90%;
`;

const TraditionalLoginButton = styled(StyledButton)`
  /* padding: 0.7rem; */
  /* font-size: 1.4rem; */
`;

const SocialButton = styled(StyledButton)`
  border: 1px solid ${({ theme }) => theme.palette.bootstrapDark};
  color: ${({ theme }) => theme.palette.black200};
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  .facebook {
    color: #4267b2;
  }
`;

const RegistrationSwitchWrapper = styled.div`
  padding: 10px 0 20px;
  border-bottom: 1px solid lightgray;
  span {
    color: ${({ theme }) => theme.palette.black100};
    margin: 0 10px;
    cursor: pointer;
    font-size: 1.5rem;

    &.active {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.green100};
    }
  }
`;

const RegisterCheckboxWrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  a {
    color: ${({ theme }) => theme.palette.green100};
    font-weight: bold;
  }
  #agreement {
    width: 15px;
    margin-right: 10px;
  }
`;

type LoginFormikValues = {
  username: string;
  password: string;
};
type RegisterFormikValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const LoginRegisterModal = () => {
  const { state, dispatch } = useAppContext();
  const [modalType, setModalType] = useState<ModalTypes>(ModalTypes.LOGIN);
  const loginFormRef = useRef<FormikProps<LoginFormikValues>>(null);
  const registerFormRef = useRef<FormikProps<RegisterFormikValues>>(null);
  const isModalVisible =
    state.authModalShower.type === AuthModals.LOGIN_OR_REGISTER;

  const { t } = useTranslation(Translations.AUTH);

  const handeSetActiveModalTab = (type: ModalTypes) => {
    setModalType(type);
  };
  const handleCloseModal = () => {
    dispatch(AuthModalAction.closeAllModals());
  };

  const handleCloseModalAndShowPasswordForgetModal = () => {
    dispatch(AuthModalAction.closeAllModals());
    dispatch(AuthModalAction.showPasswordForgetModal());
  };
  // REGISTER SECTION

  const registerInitialCredentials: RegisterFormikValues = Object.freeze({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const registerValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("yup_incorrect_email"))
      .required(t("yup_field_required")),
    password: Yup.string()
      .required(t("yup_field_required"))
      .min(10, t("yup_too_short_password"))
      .matches(
        /[0-9].*[0-9].*[0-9]/,
        t("registration_password_regex_requirements")
      ),
    passwordConfirm: Yup.string()
      .required(t("yup_field_required"))
      .oneOf([Yup.ref("password"), null], t("yup_passwords_dont_match")),
    agreement: Yup.boolean().oneOf([true], t("yup_terms_have_to_be_accepted")),
  });

  // LOGIN SECTION
  const initialLoginValues: LoginFormikValues = Object.freeze({
    username: "",
    password: "",
  });
  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required(t("yup_field_required")),
    password: Yup.string().required(t("yup_field_required")),
  });

  return (
    <Modal isVisible={isModalVisible} onRequestClose={handleCloseModal}>
      <RegistrationSwitchWrapper className="text-center">
        <span
          className={modalType === ModalTypes.LOGIN ? "active" : "inactive"}
          onClick={() => handeSetActiveModalTab(ModalTypes.LOGIN)}
        >
          {t("login_title")}
        </span>
        <span
          className={modalType === ModalTypes.REGISTER ? "active" : "inactive"}
          onClick={() => handeSetActiveModalTab(ModalTypes.REGISTER)}
        >
          {t("registration_title")}
        </span>
      </RegistrationSwitchWrapper>
      <div className="text-center auth-form-wrapper ">
        <h1>
          {modalType === ModalTypes.LOGIN
            ? t("login_title")
            : t("registration_title")}
        </h1>

        {modalType === ModalTypes.LOGIN ? (
          <>
            <Formik
              initialValues={initialLoginValues}
              validationSchema={loginValidationSchema}
              innerRef={loginFormRef}
              onSubmit={() => {}}
            >
              <Form className="text-center">
                <Field
                  name="username"
                  id="username"
                  placeholder={t("login_username_placeholder")}
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="error-message"
                />
                <Spacer y={4} />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder={t("login_password_placeholder")}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="error-message"
                />
                <Spacer y={4} />

                <TraditionalLoginButton
                  //   size="sm"
                  //   variant="purple"
                  type="submit"
                  //   disabled={traditionalLoginMutation.isLoading}
                >
                  {t("login_log_in_button_text")}
                  {/* {traditionalLoginMutation.isLoading
                    ? t("login_log_in_button_text_in_progress")
                    : t("login_log_in_button_text")} */}
                </TraditionalLoginButton>
              </Form>
            </Formik>
            <p>{t("login_or")}</p>
            <div>
              <SocialButton>
                <FaFacebookF className="facebook" />
                <Spacer x={2} />
                Zaloguj przez Facebooka
              </SocialButton>
            </div>
            <Spacer y={4} />
            <div>
              <SocialButton>
                <FcGoogle />
                <Spacer x={2} />
                Zaloguj przez Google
              </SocialButton>
            </div>
            <p
              className="modal-additional-action"
              onClick={handleCloseModalAndShowPasswordForgetModal}
            >
              {t("login_password_forget_text")}
            </p>
          </>
        ) : (
          <>
            <Formik
              initialValues={registerInitialCredentials}
              validationSchema={registerValidationSchema}
              innerRef={registerFormRef}
              onSubmit={() => {}}
            >
              <Form>
                <Field name="email" placeholder="E-mail" />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="error-message"
                />
                <Spacer y={4} />

                <Field
                  name="password"
                  type="password"
                  placeholder={t("registration_password_placeholder")}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="error-message"
                />
                <Spacer y={4} />

                <Field
                  name="passwordConfirm"
                  type="password"
                  placeholder={t("registration_password_confirm_placeholder")}
                />
                <ErrorMessage
                  name="passwordConfirm"
                  component="p"
                  className="error-message"
                />

                {/* <Spacer y={4} /> */}
                {/*  */}

                <RegisterCheckboxWrapper>
                  <div style={{ width: 30 }}>
                    <Field
                      type="checkbox"
                      name="agreement"
                      id="agreement"
                      onClick={() => {}}
                    />{" "}
                  </div>
                  <p>
                    {t("registration_i_accept")}{" "}
                    <a href={Routes.STATUTE} target="_blank" rel="noreferrer">
                      {t("registration_policy_privacy")}
                    </a>{" "}
                    {t("registration_and")}{" "}
                    <a
                      href={Routes.PRIVACY_POLICY}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("registration_statute")}
                    </a>{" "}
                    {t("registration_company")}
                  </p>
                </RegisterCheckboxWrapper>
                <ErrorMessage
                  name="agreement"
                  component="p"
                  className="error-message"
                />
              </Form>
            </Formik>
          </>
        )}
      </div>
    </Modal>
  );
};

export default LoginRegisterModal;
