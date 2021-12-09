import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field, FormikProps } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

import { useAppContext } from "hooks/useAppContext";
import { AuthModalAction } from "actions";
import { AuthModals, Translations } from "enums";
import Spacer from "components/atoms/Spacer";
import Button from "components/atoms/Button";
import Modal from "components/molecules/Modal";

type ResetPasswordFormikValues = {
  email: string;
};

type FormikSetNewPasswordValues = {
  password: string;
  passwordConfirm: string;
};

const PasswordForgetModal = () => {
  const { t } = useTranslation(Translations.AUTH);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isPasswordForgetEmailLinkClicked = !!searchParams.get(
    "reset_password_token"
  );

  const { state, dispatch } = useAppContext();
  const isModalVisible =
    state.authModalShower.type === AuthModals.PASSWORD_FORGET;
  const resetPasswordFormRef =
    useRef<FormikProps<ResetPasswordFormikValues>>(null);
  const setNewPasswordFormRef =
    useRef<FormikProps<FormikSetNewPasswordValues>>(null);

  useEffect(() => {
    if (isPasswordForgetEmailLinkClicked) {
      dispatch(AuthModalAction.showPasswordForgetModal());
    }
  }, []);
  // START PASSWORD RESET SECTION
  const initialResetPasswordValues: ResetPasswordFormikValues = Object.freeze({
    email: "",
  });

  const resetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("yup_incorrect_email"))
      .required(t("yup_field_required")),
  });

  // SET NEW PASSWORD SECTION
  const initialSetNewPasswordValues: FormikSetNewPasswordValues = Object.freeze(
    {
      password: "",
      passwordConfirm: "",
    }
  );
  const setNewPasswordValidatonSchema = Yup.object().shape({
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
  });

  const handleCloseModal = () => {
    dispatch(AuthModalAction.closeAllModals());
  };

  const handleCloseModalAndShowLoginRegisterModal = () => {
    dispatch(AuthModalAction.closeAllModals());
    dispatch(AuthModalAction.showLoginRegisterModal());
  };

  return (
    <Modal isVisible={isModalVisible} onRequestClose={handleCloseModal}>
      <div className="text-center auth-form-wrapper">
        {isPasswordForgetEmailLinkClicked ? (
          <>
            <h1>{t("reset_password_email_link_clicked_title")}</h1>
            <Formik
              innerRef={setNewPasswordFormRef}
              validationSchema={setNewPasswordValidatonSchema}
              initialValues={initialSetNewPasswordValues}
              onSubmit={() => {}}
            >
              <Form>
                <p className="pb-3">
                  {t("reset_password_email_link_clicked_title")}
                </p>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder={t("change_password_new_password_placeholder")}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="error-message"
                />
                <Field
                  name="passwordConfirm"
                  type="password"
                  id="passwordConfirm"
                  placeholder={t(
                    "change_password_new_password_confirm_placeholder"
                  )}
                />
                <ErrorMessage
                  name="passwordConfirm"
                  component="p"
                  className="error-message"
                />
              </Form>
            </Formik>
            <p
              className="modal-additional-action"
              onClick={handleCloseModalAndShowLoginRegisterModal}
            >
              {t("login_password_reset_text")}
            </p>
          </>
        ) : (
          <>
            <h1>{t("reset_password_title")}</h1>
            <p>{t("reset_password_instructions")}</p>
            <Formik
              initialValues={initialResetPasswordValues}
              validationSchema={resetPasswordValidationSchema}
              innerRef={resetPasswordFormRef}
              onSubmit={() => {}}
            >
              <Form className="text-center">
                <Field
                  name="email"
                  id="email"
                  placeholder={t("login_username_placeholder")}
                />
                <p className="error-message">
                  <ErrorMessage name="email" component="p" />
                </p>
                <Spacer y={4} />

                <Button type="submit">
                  {t("reset_password_submit_button_text")}
                </Button>
              </Form>
            </Formik>
            <p
              className="modal-additional-action"
              onClick={handleCloseModalAndShowLoginRegisterModal}
            >
              {t("reset_password_back_to_login_text")}
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default PasswordForgetModal;
