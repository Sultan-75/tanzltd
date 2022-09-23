import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  DeveloperRights,
  FooterLinkHrf,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Information</FooterLinkTitle>
            <FooterLink to="/">
              28 Osborn Street <br />
              London E1 6TD
              <br /> UK
            </FooterLink>
            <FooterLink to="/">07564033214</FooterLink>
            <FooterLink to="/">
              info@tanjeelgroup.com <br />
              tanzeelgroup@yahoo.com
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Useful Links</FooterLinkTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/services">Service</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLinkHrf href="/">Instagram</FooterLinkHrf>
            <FooterLinkHrf href="https://www.facebook.com/sultanahmed.rana.7">
              Facebook
            </FooterLinkHrf>
            <FooterLinkHrf href="https://twitter.com/home">
              Twitter
            </FooterLinkHrf>
            <FooterLinkHrf href="https://wa.me/007564033214">
              WhatsApp
            </FooterLinkHrf>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Other Links</FooterLinkTitle>
            <FooterLinkHrf href="/">Privacy policy</FooterLinkHrf>
            <FooterLinkHrf href="/">Terms of Service</FooterLinkHrf>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>About us</FooterLinkTitle>
            <FooterLink to="/">About us</FooterLink>
            <FooterLink to="/">Our team</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">TANZEEL GROUP</SocialLogo>
          <WebsiteRights>© Copyright 2020. All rights reserved.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/sultanahmed.rana.7"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/home"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="https://wa.me/007564033214"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <DeveloperRights>Developed by Sultan Ahmed</DeveloperRights>
    </FooterContainer>
  );
}

export default Footer;
