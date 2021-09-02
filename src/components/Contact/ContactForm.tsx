import React, { useState, useRef } from "react";
import Container from "../../Container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Props {}

const ContactForm = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  // validating email
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // validating form
  const validateForm = () => {
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.message === ""
    ) {
      return false;
    } else if (!validateEmail(userData.email)) {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const v = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.7,
        type: "spring",
      },
    },
  };

  // submiting form values

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(userData);

    if (validateForm()) {
      fetch("/api/mail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          message: userData.message,
          email: userData.email,
        }),
      })
        .then((resp) => {
          if (resp.status === 200) {
            setMessage("Message sent successfully");
            setError(false);
            setUserData({
              name: "",
              email: "",
              message: "",
            });
            setTimeout(() => {
              setMessage("");
            }, 4000);
          }
        })
        .catch((err) => {
          setMessage("An error occured pls try again");
          console.log(err);
        });
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        variants={v}
        animate={inView ? "animate" : "initial"}
        className="flex flex-col flex-wrap w-full pb-12 my-10 lg:flex-row "
      >
        <div className="w-12/12 text-center md:text-center md:text-[80px] lg:text-left lg:w-6/12 py-4 font-medium  text-gray-800 text-[50px] lg:text-[77px] xl:text-[95px] dark:text-light-bg">
          Want to start a new project or work with me?
        </div>

        {/* contact form */}
        <div className="flex items-center justify-center w-full p-4 lg:w-6/12">
          <form className="w-full lg:ml-auto lg:mr-0 md:w-9/12 h-5/6">
            {message && (
              <div className="px-8 py-2 text-center text-white bg-green-500 shadow-lg rounded-xl">
                {message}
              </div>
            )}
            <input
              value={userData.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 my-3 text-gray-700 border-2 border-gray-800 rounded-lg shadow-md outline-none placeholder-shown: placeholder-opacity-90"
            />
            {userData.name === "" && error && (
              <span className="text-red-600 ">Name is required</span>
            )}

            <input
              value={userData.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 my-3 text-gray-700 border-2 border-gray-800 rounded-lg shadow-md outline-none placeholder-shown: placeholder-opacity-90"
            />
            {userData.email.length > 2 && !validateEmail(userData.email) && (
              <span className="text-red-500">Enter a valid email</span>
            )}
            {userData.email === "" && error && (
              <span className="text-red-600 ">Email is required</span>
            )}

            <textarea
              value={userData.message}
              onChange={handleChange}
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="w-full p-2 mt-2 text-gray-700 border-2 border-gray-800 rounded-lg shadow-md outline-none placeholder-shown: placeholder-opacity-90"
            ></textarea>
            {userData.message === "" && error && (
              <span className="text-red-600 ">Message is required</span>
            )}

            <button
              type="submit"
              onClick={submit}
              className="w-full px-8 py-3 my-4 text-white bg-gray-800 rounded-lg shadow-lg dark:bg-light-bg dark:text-dark-bg"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactForm;
