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
          <a href="https://twitter.com/Zuhair_Ahmed0">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zuhair-ahmed-8736b0227/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/ZuhairAhmed0">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://wa.me/0997313128">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Zuhair.dev">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://t.me/ZUH67">
            <FaTelegram />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Social;
