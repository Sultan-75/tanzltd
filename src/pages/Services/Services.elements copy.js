import { Link } from "react-router-dom";
import styled from "styled-components";

export const SeviceSection = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SeviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SeviceHeading = styled.h1`
  color: #0a1435;
  font-size: 48px;
  margin-bottom: 22px;
`;

export const SeviceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .flip-card {
    background-color: transparent;
    width: 400px;
    height: 400px;
    perspective: 1000px;
    margin: 15px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`;

export const SeviceCard = styled(Link)`
  background: #0a1435;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 270px;
  text-decoration: none;
  border-radius: 4px;
  margin: 24px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin: 18px 0;
    &:hover {
      transform: none;
    }
  }
`;

export const SeviceCardInfo = styled.div`
  text-align: center;
  color: #fff;
  .card-img {
    max-width: 270px;
    max-height: auto;
  }
`;

export const SeviceCardPlan = styled.h3`
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 24px;
`;
