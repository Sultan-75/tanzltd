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
            <InfoHeading>Address</InfoHeading>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
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
                <label htmlFor="Message"></label>
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
