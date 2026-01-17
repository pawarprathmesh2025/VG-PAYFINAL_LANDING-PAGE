import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    // If not on home page, go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActive(id);
        }
      }, 300);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/devices/app-logo 1.png" alt="VG PAY Logo" />
      </div>

      {/* MENU */}
      <ul>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => scrollTo("home")}
        >
          Home
        </li>

        <li
          className={active === "features" ? "active" : ""}
          onClick={() => scrollTo("features")}
        >
          Features
        </li>

        <li
          className={active === "OurDevices" ? "active" : ""}
          onClick={() => scrollTo("OurDevices")}
        >
          Our Devices
        </li>

        {/* ROUTED ABOUT PAGE */}
        <li
          className={location.pathname === "/about" ? "active" : ""}
          onClick={() => navigate("/about")}
        >
          About Us
        </li>

        <li
          className={active === "/contact" ? "active" : ""}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
