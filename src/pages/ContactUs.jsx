import React from "react";
import Nav from "../components/Nav";
import ServicesImg from "../components/ServicesImg";
import Form from "../components/ContactUs/Form";
import FootBar from "../components/FootBar";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <ServicesImg title={"Contact Us"} />
      <Form />
      <FootBar />
    </div>
  );
};

export default ContactUs;
