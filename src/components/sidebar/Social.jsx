import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiFrontendmentor } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

{
  /* <FaWhatsapp /> */
}

function Social() {
  return (
    <div>
      <div className="mt-[-25px] pb-5 text-[15px]">
        <div className="cursor-pointer  py-3">
          <a
            className="flex items-center gap-2 transition-all hover:text-[#5eead4]"
            target="_blank"
            href="https://wa.me/qr/ZZYUNF6ZM3C7C1"
          >
            <FaWhatsapp className="text-2xl" /> Contact me via Whatsapp
          </a>
        </div>
        <div className="cursor-pointer  py-1">
          <a
            className="flex items-center gap-2 transition-all hover:text-[#5eead4]"
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yasmientareq@gmail.com&su"
          >
            <AiOutlineMail className="text-2xl" /> Contact me via Email
          </a>
        </div>
      </div>

      <ul className="flex items-center gap-4 pt-8">
        <li>
          <a target="_blank" href="https://github.com/jatwvv">
            <FiGithub className="text-4xl transition-all hover:text-[#5eead4]" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/yasmin-tareq/">
            <FaLinkedin className="text-4xl transition-all hover:text-[#5eead4]" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.frontendmentor.io/profile/jatwvv"
          >
            <SiFrontendmentor className="text-4xl transition-all hover:text-[#5eead4]" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
