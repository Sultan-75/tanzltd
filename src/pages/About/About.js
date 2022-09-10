import React from "react";
import { InfoSection } from "../../components";
import { AboutData } from "./Data";

const About = () => {
  return (
    <>
      <InfoSection {...AboutData} />
    </>
  );
};

export default About;
