import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Services.elements";

const Services = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our Services</PricingHeading>
        <PricingContainer>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <PricingCardPlan>Waiter Service</PricingCardPlan>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <PricingCardPlan>Waiter Service</PricingCardPlan>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <PricingCardPlan>Waiter Service</PricingCardPlan>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <PricingCardPlan>Waiter Service</PricingCardPlan>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <PricingCardPlan>Waiter Service</PricingCardPlan>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <img
                src={require("../../images/waiter.jpg")}
                alt="card-img"
                className="card-img"
              />
              <PricingCardPlan>Waiter Service</PricingCardPlan>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};
export default Services;
