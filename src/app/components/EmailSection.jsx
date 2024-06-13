"use client"
import  React,{ useState } from 'react'
import GithubIcon from "../../../public/assets/github-icon.svg";
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


  return (
    <section id="contact"  className="grid md:grid-cols-2 my-12 py-24 px-16 relative">
      <div className="">
        <h1 className="text-2xl font-bold text-white my-2">Let&apos;s Connect</h1>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="flex flex-row gap-2">
          <a href="https://github.com/sabuuuu" target="_blank">
            <Image src={GithubIcon}  alt=''/>
          </a>
          <a href="linkedin.com" target="_blank">
            <Image src={LinkedinIcon}  alt=''/>
          </a>
        </div>
      </div>
      <div>
      <form>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm  font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-[#18191E] text-sm  border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100  rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              for="subject"
              className="block mb-2 font-medium text-sm  text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-[#18191E] text-sm  border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              for="subject"
              className="block mb-2  text-sm  font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-[#18191E] text-sm  border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-3 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;