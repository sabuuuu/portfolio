import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-6 flex justify-between">
        <Image src="/assets/logo2.png" alt="logo" width={42} height={42} />
        <p className="text-slate-600 text-lg">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;