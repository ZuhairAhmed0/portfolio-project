import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function Social({ children }) {
  return (
    <section className="social">
      {children}
      <ul>
        <li>
          <a href="https://twitter.com/Zuhair_Ahmed0" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zuhair-ahmed-8736b0227/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/ZuhairAhmed0" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://wa.me/249997313128" target="_blank">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Zuhair.dev" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://t.me/ZUH67" target="_blank">
            <FaTelegram />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Social;
