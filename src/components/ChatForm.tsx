import { Field, Form, Formik } from "formik";

interface message {
  message: string;
}

export interface Answer {
  answer: string;
}

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
      <Form className='flex flex-row w-3/5 h-10 my-8 '>
        <Field
          name='message'
          type='text'
          placeholder='Napisz coś...'
          className='bg-darkBlue text-lightBlue rounded rounded-r-none border-lightBlue border-2 border-r-0 w-full outline-0 py-4'
        />
        <button
          className='bg-darkBlue text-lightBlue rounded rounded-l-none border-lightBlue border-2 '
          type='submit'>
          <span className='p-4'>Wyślij</span>
        </button>
      </Form>
    </Formik>
  );
};
