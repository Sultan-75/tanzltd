import React from "react";
import { homeData } from "./Data";
import { InfoSection } from "../../components";
import Services from "../Services/Services";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <InfoSection {...homeData} />
      <About />
      <Services />
    </>
  );
};

export default Home;
