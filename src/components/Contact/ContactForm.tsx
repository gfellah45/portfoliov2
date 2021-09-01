import React from "react";
import Container from "../../Container";

interface Props {}

const ContactForm = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col flex-wrap w-full pb-12 my-10 md:flex-row ">
        <div className="w-full md:w-6/12 py-4 font-medium text-gray-800 text-[50px] md:text-[100px] dark:text-light-bg">
          Want to start a new project or work with me?
        </div>
        <div className="flex items-center justify-center w-full p-4 md:w-6/12">
          <div className="w-full ml-auto mr-0 md:w-9/12 h-5/6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 my-4 text-gray-700 border-2 border-gray-800 rounded-lg shadow-md outline-none placeholder-shown: placeholder-opacity-90"
            />

            <input
              type="email"
              name="name"
              placeholder="Email"
              className="w-full p-2 my-4 text-gray-700 border-2 border-gray-800 rounded-lg shadow-md outline-none placeholder-shown: placeholder-opacity-90"
            />

            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="w-full p-2 my-4 text-gray-700 border-2 border-gray-800 rounded-lg shadow-md outline-none placeholder-shown: placeholder-opacity-90"
            ></textarea>

            <button className="w-full px-8 py-3 text-white bg-gray-800 rounded-lg shadow-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
