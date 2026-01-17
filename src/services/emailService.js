import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sqjwf09";
const TEMPLATE_ID = "template_wcx4a4a";
const PUBLIC_KEY = "XgiHAGb6Vrl_Cjmqa";

export const sendContactEmail = (data) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: `${data.firstName} ${data.surname}`,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
    },
    PUBLIC_KEY
  );
};
