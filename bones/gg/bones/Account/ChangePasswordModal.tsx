import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Spacer from "components/atoms/Spacer";
import { Translations } from "enums";
import Button from "components/atoms/Button";
import Modal from "components/molecules/Modal";

type ChangePasswordModalProps = {
  handleToggleIsVisible: () => void;
};
const ChangePasswordModal = ({
  handleToggleIsVisible,
}: ChangePasswordModalProps) => {
  const { t } = useTranslation(Translations.AUTH);

  const initialValues = Object.freeze({
    oldPassword: "",
    password: "",
    passwordConfirm: "",
  });

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required(t("yup_field_required")),
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
  return (
    <Modal onRequestClose={handleToggleIsVisible} isVisible>
      <div className="text-center auth-form-wrapper ">
        <h1>{t("change_password_title")}</h1>
        <p>{t("change_password_instructions")}</p>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {}}
        >
          <Form>
            <Field
              name="oldPassword"
              type="password"
              id="oldPassword"
              placeholder={t("change_password_old_password_placeholder")}
            />

            <ErrorMessage
              className="error-message"
              name="oldPassword"
              component="p"
            />
            <Spacer y={4} />

            <Field
              name="password"
              type="password"
              id="password"
              placeholder={t("change_password_new_password_placeholder")}
            />

            <ErrorMessage
              className="error-message"
              name="password"
              component="p"
            />
            <Spacer y={4} />

            <Field
              name="passwordConfirm"
              type="password"
              id="passwordConfirm"
              placeholder={t(
                "change_password_new_password_confirm_placeholder"
              )}
            />

            <ErrorMessage
              className="error-message"
              name="passwordConfirm"
              component="p"
            />
            <Spacer y={4} />

            <Button className="auth-button">
              {/* {mutation.isLoading ? t("common:changing") : t("common:change")} */}
              Zmień
            </Button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
