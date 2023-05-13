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
          className='bg-darkBlue text-white rounded rounded-r-none border-grey focus:border-lightBlue border-2 border-r-0 w-full outline-0 px-4'
        />
        <button
          className='bg-darkBlue text-lightBlue rounded rounded-l-none border-grey border-2 active:outline-0'
          type='submit'>
          <span className='p-4'>Wyślij</span>
        </button>
      </Form>
    </Formik>
  );
};
