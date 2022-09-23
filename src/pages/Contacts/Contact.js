import React from "react";
import { Button, Container } from "../../globalStyles";
import { FaLocationArrow, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import {
  ContactWrapper,
  ContactHeading,
  FormSide,
  InfoSide,
  ContactContainer,
  InfoHeading,
  InfoPara,
  InfoIcon,
  FormGroup,
} from "./Contact.elements";

const Services = () => {
  return (
    <Container>
      <ContactWrapper>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactContainer>
          <InfoSide>
            <InfoIcon>
              <FaLocationArrow />
            </InfoIcon>
            <InfoHeading>Location</InfoHeading>
            <InfoPara>
              28 Osborn Street <br />
              London E1 6TD
              <br /> UK
            </InfoPara>
            <InfoIcon>
              <FaPhoneAlt />
            </InfoIcon>
            <InfoHeading>Phone</InfoHeading>
            <InfoPara>07564033214</InfoPara>
            <InfoIcon>
              <FaEnvelopeOpen />
            </InfoIcon>
            <InfoHeading>Email</InfoHeading>
            <InfoPara>
              info@tanjeelgroup.com <br />
              tanzeelgroup@yahoo.com
            </InfoPara>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.789907844584!2d-0.07219008422968812!3d51.51707027963674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cca84c0a3ef%3A0x46801ec606f3cb90!2s28%20Osborn%20St%2C%20London%20E1%206TD%2C%20UK!5e0!3m2!1sen!2sbd!4v1663941190515!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ border: "0", width: "100%", height: "290px" }}
              allowFullScreen
            ></iframe>
          </InfoSide>
          <FormSide>
            <FormGroup>
              <form action="https://formspree.io/f/xbjbdnaa" method="POST">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your Name.."
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number.."
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email.."
                />
                <label htmlFor="Message">Message</label>
                <textarea
                  id="Message"
                  name="Message"
                  placeholder="What kinds of service you want.."
                  style={{ height: "100px" }}
                ></textarea>

                <input type="submit" value="Submit" />
              </form>
            </FormGroup>
          </FormSide>
        </ContactContainer>
      </ContactWrapper>
    </Container>
  );
};
export default Services;

<iframe
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
