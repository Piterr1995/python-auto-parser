import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Spacer from "components/atoms/Spacer";
import { Translations } from "enums";
import Button from "components/atoms/Button";
import Modal from "components/molecules/Modal";

type DeleteCardConfirmationModalProps = {
  handleToggleIsVisible: () => void;
};

const DeleteCardConfirmationModal = ({
  handleToggleIsVisible,
}: DeleteCardConfirmationModalProps) => {
  const { t } = useTranslation(Translations.TRANSLATION);

  return (
    <Modal onRequestClose={handleToggleIsVisible} isVisible>
      <div className="text-center auth-form-wrapper ">
        <h1>{t("change_email_title")}</h1>
        <p>{t("change_email_instructions")}</p>
      </div>
    </Modal>
  );
};

export default DeleteCardConfirmationModal;
