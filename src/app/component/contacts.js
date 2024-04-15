"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "emailjs-com";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues };

const Contacts = () => {
  const [state, setState] = useState(initState);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { values } = state;
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const handleChange = ({ target }) => {
    setIsError(false);
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };
  const handleError = (condition, ref, message) => {
    if (condition) {
      setIsError(true);
      ref.current.focus();
      setErrorMsg(message);
      console.log(isError);
      return true;
    }
    return false;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      handleError(!values.name.trim(), nameInputRef, "Name is Required") ||
      handleError(!values.email.trim(), emailInputRef, "Email is Required") ||
      handleError(
        !values.message.trim(),
        messageInputRef,
        "Message is Required"
      )
    ) {
      return;
    }

    setIsLoading(true);
    setErrorMsg("");
    // setState(initState);
    setIsError(false);

    // SEND EMAIL

    try {
      // MAYONITY
      const response = await emailjs.sendForm(
        "service_mlgfgrg",
        "template_3kja57d",
        form.current,
        "I78ukZkWYYfkYNrn4",
        { user_email: e.target.email.value }
      );
      //ABDUL_HANNAN
      const response2 = await emailjs.sendForm(
        "service_1xr7bsc",
        "template_g8de3qi",
        form.current,
        "VtHYwbCt_wamdCndZ",
        { user_email: e.target.email.value }
      );

      // const response = await emailjs.sendForm(
      //   // RGM
      //   "service_ybhaed4",
      //   "template_ew6i8md",
      //   form.current,
      //   "jiitdfNxo1h_xyJ_7",
      //   { user_email: e.target.email.value }
      // );
      // const response2 = await emailjs.sendForm(
      //   //PZ
      //   "service_ixn6ovf",
      //   "template_rn69ki5",
      //   form.current,
      //   "B4iC9NOaloam9pD2t",
      //   { user_email: e.target.email.value }
      // );
      setIsLoading(false);
      setIsModalOpen(true);
      console.log("Email 1 sent successfully:", response);
      console.log("Email 2 sent successfully:", response2);
    } catch (error) {
      setIsLoading(false);
      console.error("Email sending failed:", error);
    }
    setState(initState);
  };

  return (
    <motion.div
      whileInView={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ delay: 0.2, duration: 1 }}
      id="contact"
      // className="md:w-[780px] bg-black flex flex-wrap gap-3 mx-5 pt-56 md:mx-auto"
      className="md:w-[780px] sm:flex  gap-3 mx-5 pt-56 md:mx-auto"
    >
      <div>
        <div className="bg-[#2D8CFF]   md:w-[350px] w-full py-10 px-7 rounded-2xl text-white">
          <h1 className="text-white poppins-semibold md:text-2xl text-xl">
            Book a Meeting with Calendly
          </h1>
          <p className="md:text-[12px] text-xs poppins-light my-1">
            Feel free to adjust the wording to better fit
            <br />
            the tone and style of your website.
          </p>
          <Link
            target="_blank"
            href="https://calendly.com/abdul-hannan-dev/60-minute-strategy-session?month=2024-03"
          >
            <div className="bg-[#FFFFFF] rounded-xl md:w-36 w-[140px] p-3 px-3 mt-4 flex items-center gap-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <Image
                src="/icon.png"
                alt="icon"
                width={88}
                height={22}
                // className="w-40 sm:w-auto"
              />
              <Image
                src="/exportblack.png"
                alt="icon"
                width={16}
                height={18}
                // className="w-auto"
              />
            </div>
          </Link>
        </div>
        <div className="text-center md:w-[350px] w-full bg-[#EDEDED] py-14 mt-2 rounded-2xl">
          <h1 className="text-[40px] poppins-bold">Get in Touch </h1>
          <p className="text-[#787878] text-sm p-2 sm:p-0 sm:w-64 mt-3 mx-auto">
            Have a project in mind that you think we’d be a great fit for it?
            We’d love to know what you’re thinking
          </p>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        onClick={() => setIsError(false)}
        className="bg-[#EDEDED] w-full sm:w-[410px] flex flex-col md:p-10 p-8 mt-2 sm:m-0 rounded-2xl "
      >
        <label className="text-[#000000] text-sm poppins-bold">Full Name</label>
        <input
          ref={nameInputRef}
          value={values.name}
          onChange={handleChange}
          type="text"
          placeholder="Input your full name in here"
          name="name"
          className={`mt-2 bg-[#FEFFFF] p-3 text-[#000000]  md:rounded-xl rounded-lg text-xs   outline-none    border-2 border-transparent ${
            isError
              ? "focus:border-[1px] focus:border-red-500 focus:ring-0 placeholder-red-500"
              : "focus:border-[#2D8CFF]  focus:outline-none"
          }`}
        />
        {isError && !values.name.trim() && (
          <p class="mt-2 text-xs text-red-500 dark:text-red-500 ">
            {" "}
            {errorMsg}{" "}
          </p>
        )}

        <label className="text-[#000000] text-sm poppins-bold mt-5">
          Email Address
        </label>
        <input
          ref={emailInputRef}
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="Input your email address in here"
          name="email"
          className={`mt-2 bg-[#FEFFFF] p-3 text-[#000000]  md:rounded-xl rounded-lg text-xs   outline-none focus:border-[#2D8CFF]    border-2 border-transparent ${
            isError
              ? "focus:border focus:border-red-500 focus:ring-0 focus:placeholder-red-500 "
              : "focus:border-[#2D8CFF]"
          }`}
        />

        {isError && values.name.trim() && !values.email.trim() && (
          <p class="mt-2 text-xs text-red-500 dark:text-red-500 ">
            {" "}
            {errorMsg}{" "}
          </p>
        )}

        <label className="text-[#000000] text-sm poppins-bold mt-5">
          Message
        </label>
        <textarea
          ref={messageInputRef}
          value={values.message}
          onChange={handleChange}
          name="message"
          type="text"
          placeholder="Write your messages in here"
          className={`mt-2 bg-[#FEFFFF] p-3 text-[#000000]  md:rounded-xl rounded-lg text-xs   outline-none focus:border-[#2D8CFF]    border-2 border-transparent ${
            isError
              ? "focus:border focus:border-red-500 focus:ring-0 focus:placeholder-red-500"
              : "focus:border-[#2D8CFF]"
          }`}
        />
        {isError &&
          values.name.trim() &&
          values.email.trim() &&
          !values.message && (
            <p class="mt-2 text-xs text-red-500 dark:text-red-500 ">
              {" "}
              {errorMsg}{" "}
            </p>
          )}

        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          type="submit"
          className="w-full bg-black text-white md:rounded-xl md:rounded-xl poppins-semibold rounded-xl md:py-4 py-3 cursor-pointer mt-4 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#2D8CFF] hover:text-white duration-300"
        >
          {isLoading && (
            <svg
              aria-hidden="true"
              role="status"
              className="inline mr-2 w-6 h-6 text-gray-100 animate-spin dark:text-gray-600 mr-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill={isHovered ? "black" : "#1C64F2"}
              ></path>
            </svg>
          )}
          Send Message
        </button>
        {/* {console.log('isModalOpen', isModalOpen)} */}
        {isModalOpen && <Modal isOpen={setIsModalOpen} />}
      </form>
    </motion.div>
  );
};

export default Contacts;

const Modal = ({ isOpen }) => {
  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50   flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div
            className="relative bg-white   dark:bg-gray-700 p-2 border-[1px] border-[#CACACA] rounded-2xl "
            style={{ boxShadow: "0px 4px 30px 0px #00000040" }}
          >
            <div
              className="float-right cursor-pointer mx-auto bg-[#2D8CFF] text-white p-2 rounded transition ease-in-out delay-150  hover:scale-110 duration-300 hover:bg-black"
              onClick={() => isOpen(false)}
            >
              <svg
                className="w-2 h-2  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </div>
            <div className="p-4 md:p-5 text-center">
              <h1 className="poppins-bold md:text-2xl text-xl mt-[23px] ">
                Message Sent Successfully
              </h1>
              <h3 className="my-5 text-sm font-normal text-[#787878] dark:text-gray-400  ">
                Thank you for reaching out. I appreciate your interest and will
                get back to you as soon as possible.
              </h3>

              <button
                className="bg-[#2D8CFF] text-white block  poppins-semibold rounded-2xl text-center w-40 m-auto py-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300"
                onClick={() => isOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
