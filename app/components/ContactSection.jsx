"use client";
import { useRef } from "react";
import Heading from "./Heading";

const ContactSection = () => {
  let name = useRef("");
  let email = useRef("");
  let message = useRef("");

  const sendMessage = (event) => {
    event.preventDefault();
    let l = document.createElement("a");
    l.href = `http://wa.me/+918114076364?text=Name:+${name.current.value}%0AEmail:+${email.current.value}%0AMessage:+${message.current.value}`;
    l.target = "_blank";
    l.click();
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  return (
    <section id="contact" className="px-6 py-24">
      <Heading>Contact</Heading>
      <div className="pt-24">
        <form
          onSubmit={sendMessage}
          className="grid gap-6 max-w-[500px] mx-auto"
        >
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="bg-transparent border rounded-md px-3 py-2"
              placeholder="Name"
              ref={name}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="bg-transparent border rounded-md px-3 py-2"
              placeholder="Email"
              ref={email}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Email</label>
            <textarea
              id="message"
              className="bg-transparent border rounded-md px-3 py-2"
              rows="5"
              placeholder="Your message"
              ref={message}
              required
            ></textarea>
          </div>
          <button className="border border-zinc-200 dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 hover:dark:bg-zinc-950 w-max px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
