import React from "react";
import {
  AboutMe,
  AnimatedLine,
  Contact,
  Header,
  MyProjects,
  MySkills,
  Sidebar,
  WelcomeSection,
} from "../../components";
import "./Landing.scss";
import { backgrounds } from "../../assets/images";

export const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__sidebar-placeholder" />
      <Sidebar />
      <div className="landing-page__container">
        <header className="landing-page__header">
          <Header />
        </header>
        <main className="landing-page__main">
          <WelcomeSection />
          <AnimatedLine duration="10s" />
          <AboutMe />
          <AnimatedLine />
          <MySkills />
          <AnimatedLine duration="7s" />
          <div className="landing-page__projects-contact-wrapper">
            <MyProjects />
            <AnimatedLine duration="8s" />
            <Contact />
            <div className="landing-page__background-wrapper">
              <img
                src={backgrounds.background}
                alt=""
                className="landing-page__background-image"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
