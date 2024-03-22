import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollToUpButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <FaArrowCircleUp
      onClick={scrollToTop}
      className="go-to-up"
      style={{ display: visible ? "block" : "none" }}
    />
  );
}

export default ScrollToUpButton;
