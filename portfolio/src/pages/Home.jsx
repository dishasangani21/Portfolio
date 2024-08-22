import React from "react";
import { Contact, Experince, Header } from "../containers";
import ProjectBanner from "../components/projectBanner/ProjectBanner";

const Home = () => {
  return (
    <>
      <Header />
      <Experince />
      <ProjectBanner />
      <Contact />
    </>
  );
};

export default Home;
