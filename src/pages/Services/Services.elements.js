import { Link } from "react-router-dom";
import styled from "styled-components";

export const SeviceSection = styled.div`
  padding: 40px 0;
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
  margin-bottom: 50px;
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

  .card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;
  }
  .card:hover {
    height: 300px;
  }

  .card .image {
    position: relative;
    width: 260px;
    height: 260px;
    top: -40%;
    left: 5px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .card .image img {
    max-width: 100%;
    border-radius: 15px;
  }

  .card .content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
    h3 {
      margin: 5px 0;
    }
    p {
      margin: 5px 0;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
`;
