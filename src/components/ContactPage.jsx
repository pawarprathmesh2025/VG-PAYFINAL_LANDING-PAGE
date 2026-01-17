import "./ContactPage.css";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdLanguage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ContactPage = () => {
  return (
    <motion.section
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* TITLE */}
      <motion.h1 className="title" variants={fadeUp}>
        Let’s Start the <span>Conversation</span> with Us
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p className="subtitle" variants={fadeUp}>
        Have a question or want to work together? We'd love to hear from you.
      </motion.p>

      {/* CARDS */}
      <motion.div className="cards-grid" variants={container}>
        {/* Email */}
        <motion.div className="card" variants={cardAnim}>
          <div className="icon bounce"><MdEmail /></div>
          <h2>Email Us</h2>
          <p>Vishwaguruinfotech@gmail.com</p>
          <span>Drop us a line</span>
        </motion.div>

        {/* Call */}
        <motion.div className="card" variants={cardAnim}>
          <div className="icon bounce"><FaPhoneAlt /></div>
          <h2>Call Us</h2>
          <p>+91 2579067435</p>
          <span>Give us a call</span>
        </motion.div>

        {/* Visit */}
        <motion.div className="card" variants={cardAnim}>
          <div className="icon bounce"><MdLocationOn /></div>
          <h2>Visit Us</h2>
          <p>
            IndiaLand Global IT Park <br />
            Hinjewadi, Pune
          </p>
          <span>Visit Our Office</span>
        </motion.div>

        {/* Website */}
        <motion.div className="card" variants={cardAnim}>
          <div className="icon bounce"><MdLanguage /></div>
          <h2>Website</h2>
          <p>https://techvishwaguru.com</p>
          <span>Visit the page</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
