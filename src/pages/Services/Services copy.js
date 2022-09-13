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
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={require("../../images/waiter.jpg")}
                  alt="Avatar"
                  style={{ maxWidth: "400px", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer deomo nkssdfs jfnsj nfjs anfjs fjn</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={require("../../images/waiter.jpg")}
                  alt="Avatar"
                  style={{ maxWidth: "400px", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer deomo nkssdfs jfnsj nfjs anfjs fjn</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={require("../../images/waiter.jpg")}
                  alt="Avatar"
                  style={{ maxWidth: "400px", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer deomo nkssdfs jfnsj nfjs anfjs fjn</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={require("../../images/waiter.jpg")}
                  alt="Avatar"
                  style={{ maxWidth: "400px", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer deomo nkssdfs jfnsj nfjs anfjs fjn</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={require("../../images/waiter.jpg")}
                  alt="Avatar"
                  style={{ maxWidth: "400px", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer deomo nkssdfs jfnsj nfjs anfjs fjn</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={require("../../images/waiter.jpg")}
                  alt="Avatar"
                  style={{ maxWidth: "400px", height: "100%" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer deomo nkssdfs jfnsj nfjs anfjs fjn</p>
              </div>
            </div>
          </div>
        </SeviceContainer>
      </SeviceWrapper>
    </SeviceSection>
  );
};
export default Services;
