import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Excellent software designed to help individuals and teams
            efficiently manage and organize job applications, tasks, and
            employment-related activities. This app allows users to track the
            status of job applications, including submitted resumes, interview
            schedules, follow-ups, and responses from potential employers. It
            also provides features to organize job postings, set reminders for
            deadlines, and create notes for each application.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>

        <img
          src="src/assets/images/main.svg"
          alt="job hunt"
          className="img main-img"
        />
      </div>
    </Wrapper>
  );
}



export default Landing