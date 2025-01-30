"use client"; // Ensure this is at the top of your component files
import { WhatsappIcon } from "hugeicons-react";
import Link from "next/link";

const WhatsAppButton = ({className}) => {
  return (
    <Link
      className={` z-10   ${className}`}
      href={" https://wa.me/923111111111"}
      target="_blank"
      rel="noopener noreferrer"
    >
<button className="Btn">
  <span className="svgContainer">
    <WhatsappIcon className="text-white " size={30} />
  </span>
  <span className="BG"></span>
</button>



    </Link>
  );
};

export default WhatsAppButton;