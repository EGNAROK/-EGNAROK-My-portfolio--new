import React from "react";
import {
  AboutMe,
  Contact,
  Header,
  MyProjects,
  MySkills,
  Sidebar,
  WelcomeSection,
} from "../../components";
import { AnimatedLine } from "../../shared/components";
import "./Landing.scss";

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
          <div id="aboutMe" className="landing-page__about-me-wrapper">
            <AnimatedLine duration="10s" />
            <AboutMe />
          </div>
          <AnimatedLine />
          <MySkills />
          <div id="projects" className="landing-page__projects-contact-wrapper">
            <AnimatedLine duration="7s" />
            <MyProjects />
            <AnimatedLine duration="8s" />
          </div>
          <Contact />
        </main>
      </div>
    </div>
  );
};
