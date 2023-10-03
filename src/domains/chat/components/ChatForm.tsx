import { Form, Formik } from "formik";
import { IMessage } from "../../../interfaces/interfaces";
import { useEffect, useRef, useState, ChangeEvent } from "react";
// import { useAppSelector } from "../../../features/hooks/redux";
// import { selectShortcutState } from "../../shortcuts/features/reducers/shortcutStateSlice";
import { IChatForm } from "../helpers/interfaces";

export const ChatForm = ({ sendMessage }: IChatForm) => {
  const initialValues: IMessage = { message: "" };
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  // const options = useAppSelector(state => selectShortcutState);

  const minHeight = 40;
  const maxHeight = 200;

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${minHeight}px`;
      const scrollHeight = textAreaRef.current.scrollHeight;

      if (scrollHeight > minHeight && scrollHeight < maxHeight) {
        textAreaRef.current.style.height = `${scrollHeight}px`;
      } else if (scrollHeight >= maxHeight) {
        textAreaRef.current.style.height = `${maxHeight}px`;
      }
    }
  }, [text]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const message = JSON.stringify(values, null, 2);
        setTimeout(() => {
          console.log(message);
          sendMessage(message);
          setSubmitting(false);
        }, 400);
      }}>
      <Form className='flex flex-row w-11/12 min-h-[40px] my-4 '>
        <textarea
          name='message'
          ref={textAreaRef}
          placeholder='Say hello...'
          className='bg-darkSlate_900 text-lightSlate_100 p-3  rounded rounded-r-none border-lightSlate_400 focus:border-lightSky_400 border-2  w-full outline-0 resize-y'
          onChange={handleChange}
          value={text}
        />
        <button
          className='bg-darkSlate_900 h-12 text-lightSky_400 rounded rounded-l-none border-lightSlate_400 border-2 border-l-0 active:outline-0'
          type='submit'>
          <span className='p-4'>Send</span>
        </button>
      </Form>
    </Formik>
  );
};
