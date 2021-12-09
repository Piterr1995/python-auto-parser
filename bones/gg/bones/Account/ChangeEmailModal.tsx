import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Spacer from "components/atoms/Spacer";
import { Translations } from "enums";
import Button from "components/atoms/Button";
import Modal from "components/molecules/Modal";

type ChangeEmailModalProps = {
  handleToggleIsVisible: () => void;
};
const ChangeEmailModal = ({ handleToggleIsVisible }: ChangeEmailModalProps) => {
  const { t } = useTranslation(Translations.AUTH);

  const initialValues = Object.freeze({
    newEmail: "",
  });
  const validationSchema = Yup.object().shape({
    newEmail: Yup.string()
      .email(t("yup_incorrect_email"))
      .required(t("yup_field_required")),
  });
  return (
    <Modal onRequestClose={handleToggleIsVisible} isVisible>
      <div className="text-center auth-form-wrapper ">
        <h1>{t("change_email_title")}</h1>
        <p>{t("change_email_instructions")}</p>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={() => {}}
        >
          <Form>
            <Field
              name="newEmail"
              id="newEmail"
              placeholder={t("change_email_new_email_placeholder")}
            />
            <ErrorMessage
              className="error-message"
              component="p"
              name="newEmail"
            />
            <Spacer y={6} />
            <Button className="auth-button">Zmień</Button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default ChangeEmailModal;
