import React from "react";
import { Button } from "../../globalStyles";
import {
  SeviceSection,
  SeviceWrapper,
  SeviceHeading,
  SeviceContainer,
} from "./Services.elements";

const Services = () => {
  return (
    <SeviceSection>
      <SeviceWrapper>
        <SeviceHeading>Our Services</SeviceHeading>
        <SeviceContainer>
          <div className="card">
            <div className="image">
              <img
                src={require("../../images/kitchen-proter.jpg")}
                alt="logo"
              />
            </div>
            <div className="content">
              <h3>This is content</h3>
              <p>
                DIn publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a
              </p>
              <Button>
                <a href="">Contact US</a>
              </Button>
            </div>
          </div>
        </SeviceContainer>
      </SeviceWrapper>
    </SeviceSection>
  );
};
export default Services;
