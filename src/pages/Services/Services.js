import React from "react";
import { Button } from "../../globalStyles";
import {
  SeviceSection,
  SeviceWrapper,
  SeviceHeading,
  SeviceContainer,
  SeviceCard,
  SeviceCardInfo,
  SeviceCardPlan,
} from "./Services.elements";

const Services = () => {
  return (
    <SeviceSection>
      <SeviceWrapper>
        <SeviceHeading>Our Services</SeviceHeading>
        <SeviceContainer>
          <SeviceCard to="/sign-up">
            <SeviceCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <SeviceCardPlan>Waiter Service</SeviceCardPlan>
            </SeviceCardInfo>
          </SeviceCard>
          <SeviceCard to="/sign-up">
            <SeviceCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <SeviceCardPlan>Waiter Service</SeviceCardPlan>
            </SeviceCardInfo>
          </SeviceCard>
          <SeviceCard to="/sign-up">
            <SeviceCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <SeviceCardPlan>Waiter Service</SeviceCardPlan>
            </SeviceCardInfo>
          </SeviceCard>
          <SeviceCard to="/sign-up">
            <SeviceCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <SeviceCardPlan>Waiter Service</SeviceCardPlan>
            </SeviceCardInfo>
          </SeviceCard>
          <SeviceCard to="/sign-up">
            <SeviceCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <SeviceCardPlan>Waiter Service</SeviceCardPlan>
            </SeviceCardInfo>
          </SeviceCard>
          <SeviceCard to="/sign-up">
            <SeviceCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <SeviceCardPlan>Waiter Service</SeviceCardPlan>
            </SeviceCardInfo>
          </SeviceCard>
        </SeviceContainer>
      </SeviceWrapper>
    </SeviceSection>
  );
};
export default Services;
