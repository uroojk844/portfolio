import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavContent from "./Nav/NavContent";

const Footer = () => {
  return (
    <div className="border-t">
      <footer className="grid gap-16 justify-center text-center py-24">
        <NavContent />
        <div className="flex gap-12 justify-center">
          <a href="https://www.instagram.com/uroojk844/" target="_blank">
            <FaInstagram size={32} />
          </a>
          <a href="https://www.facebook.com/uroojk844/" target="_blank">
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/urooj-khan-b501b8154/"
            target="_blank"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="https://www.github.com/uroojk844/" target="_blank">
            <FaGithub size={32} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
