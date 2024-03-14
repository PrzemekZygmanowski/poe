import { Form, Formik } from "formik";
import React from "react";
import { IShortCut } from "../../../interfaces/interfaces";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const ShortcutForm = () => {
  const initialValues: IShortCut = {
    id: 0,
    title: "Just talk",
    icon: faPenToSquare,
    chatParams: {
      model: "gpt-3.5-turbo",
      category: "note",
      context: "",
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const message = JSON.stringify(values, null, 2);
        setTimeout(() => {
          console.log(message);
          setSubmitting(false);
        }, 400);
      }}></Formik>
  );
};
