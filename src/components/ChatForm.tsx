import { Field, Form, Formik } from "formik";
import { message } from "./interfaces";

export const ChatForm = () => {
  const initialValues: message = { message: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const message = JSON.stringify(values, null, 2);
        setTimeout(() => {
          console.log(message);

          setSubmitting(false);
        }, 400);
      }}>
      <Form className='flex flex-row w-11/12 h-10 my-4 '>
        <Field
          name='message'
          type='text'
          placeholder='Napisz coś...'
          className='bg-darkSlate_900 text-lightSlate_100 rounded rounded-r-none border-lightSlate_400 focus:border-lightSky_400 border-2 border-r-0 w-full outline-0 px-4'
        />
        <button
          className='bg-darkSlate_900 text-lightSky_400 rounded rounded-l-none border-lightSlate_400 border-2 active:outline-0'
          type='submit'>
          <span className='p-4'>Wyślij</span>
        </button>
      </Form>
    </Formik>
  );
};
