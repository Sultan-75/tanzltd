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
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Information</FooterLinkTitle>
            <FooterLink to="/">Tanzeel Group LTD</FooterLink>
            <FooterLink to="/">A108 Adam Street</FooterLink>
            <FooterLink to="/">0128454544545</FooterLink>
            <FooterLink to="/">hshf@gmail.com</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Useful Links</FooterLinkTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Service</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
            <FooterLink to="">WhatsApp</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Other Links</FooterLinkTitle>
            <FooterLink to="/">Privacy policy</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
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
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="whatsapp://send?text=Hello World!&phone=8801799213804"
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
