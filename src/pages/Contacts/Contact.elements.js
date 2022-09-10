import styled from "styled-components";

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px 0px;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 7%;
`;
export const InfoSide = styled.div`
  padding: 30px;
  background: #fff;
  width: 90%;
  border: 2px solid #e9ecee;
  border-radius: 4px;
`;
export const FormSide = styled.div`
  padding: 30px;
  background: #fff;
  width: 100%;
  border: 2px solid #e9ecee;
  border-radius: 4px;
`;

export const PricingHeading = styled.h1`
  color: #0a1435;
  font-size: 48px;
  margin-bottom: 24px;
`;
