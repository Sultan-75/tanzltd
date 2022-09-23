import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px 0px;

  @media screen and (max-width: 960px) {
    margin: 0 8px;
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
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactHeading = styled.h1`
  color: #0a1435;
  font-size: 48px;
  margin-bottom: 24px;
  text-align: center;
`;
export const InfoSide = styled.div`
  padding: 30px;
  background: #fff;
  width: 100%;
  border: 2px solid #e9ecee;
  border-radius: 4px;
  color: blue;
  @media screen and (max-width: 960px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;
export const InfoIcon = styled.div`
  font-size: 20px;
  color: #009cea;
  float: left;
  width: 44px;
  height: 44px;
  background: #f2f4f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #009cea;
    color: #fff;
  }
`;
export const InfoHeading = styled.h5`
  padding: 0 0 0 10px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  display: flex;
  color: #041c32;
`;
export const InfoPara = styled.p`
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #627680;
`;

export const FormSide = styled.div`
  * {
    box-sizing: border-box;
  }
  padding: 30px;
  background: #fff;
  width: 100%;
  border: 2px solid #e9ecee;
  border-radius: 4px;
  input[type="text"],
  input[type="email"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type="submit"] {
    background-color: #009cea;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
  @media screen and (max-width: 960px) {
    padding: 15px;
  }
`;

export const FormGroup = styled.div`
  padding: 10px;
`;
