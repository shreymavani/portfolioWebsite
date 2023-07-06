import React from "react";
import Typed from "typed.js";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "WebDeveloper",
        "Backend Developer",
        "SpringBoot Developer",
        "React Developer",
        "Express.js Developer",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shrey Mavani</h1>

        <span className="text-light" ref={el} />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
