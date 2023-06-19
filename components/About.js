import { useState, useEffect } from "react";

const About = () => {
  const [exp, setExp] = useState("");
  useEffect(() => {
    const totalExp = (date) => {
      const dt1 = new Date();
      const dt2 = new Date(date);
      var diffYear = (dt2.getTime() - dt1.getTime()) / 1000;
      diffYear /= 60 * 60 * 24;
      const year = Math.abs(Math.round(diffYear / 365.25));

      var diffMonth = (dt2.getTime() - dt1.getTime()) / 1000;
      diffMonth /= 60 * 60 * 24 * 7 * 4;
      const month = Math.abs(Math.round(diffMonth));
      setExp(`${year}.${month}`);
    };
    totalExp("2021-07-27");
  }, []);

  return (
    <>
      <section className='section sec2 about active' id='about'>
        <div className='main-title'>
          <h2>
            About <span>me</span>
            <span className='bg-text'>my status</span>
          </h2>
        </div>
        <div className='about-container'>
          <div className='left-about'>
            <h4>Information About me</h4>
            <p>
              i am a web designer/developer focused on crafting great web
              experiences. Designing and Coding have been my passion since the
              days I started working with computers but I found myself into web
              design/development since 2019. The web development community is a
              big part of my life. I love to write code, managing online
              programming groups and blogs or attending a conference, I find
              keeping involved helps me stay up to date.
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at a
              start-up. My main focus these days is building accessible,
              inclusive products and digital experiences at Upstatement for a
              variety of clients.
            </p>
            <div className='btn-con'>
              <a href='#' className='main-btn'>
                <span className='btn-text'>
                  <a href='/cv.pdf' download={"Akash's Resume"}>
                    {" "}
                    Download CV
                  </a>
                </span>
                <span className='btn-icon'>
                  <i className='fas fa-download'></i>
                </span>
              </a>
            </div>
          </div>
          <div className='right-about'>
            <div className='about-item'>
              <div className='abt-text'>
                <p className='large-text'>10+</p>
                <p className='small-text'>
                  Projects <br /> Completed
                </p>
              </div>
            </div>
            <div className='about-item'>
              <div className='abt-text'>
                <p className='large-text'>{exp}+</p>
                <p className='small-text'>
                  Years of <br /> experience
                </p>
              </div>
            </div>
            <div className='about-item'>
              <div className='abt-text'>
                <p className='large-text'>3+</p>
                <p className='small-text'>
                  Happy <br /> Clients
                </p>
              </div>
            </div>
            <div className='about-item'>
              <div className='abt-text'>
                <p className='large-text'>4+</p>
                <p className='small-text'>
                  Customer <br /> reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='about-stats'>
          <h4 className='stat-title'>My Skills</h4>
          <div className='progress-bars'>
            <div className='progress-bar'>
              <p className='prog-title'>NextJS</p>
              <div className='progress-con'>
                <p className='prog-text'>90%</p>
                <div className='progress'>
                  <span className='react'></span>
                </div>
              </div>
            </div>
            <div className='progress-bar'>
              <p className='prog-title'>ReactJS</p>
              <div className='progress-con'>
                <p className='prog-text'>85%</p>
                <div className='progress'>
                  <span className='react'></span>
                </div>
              </div>
            </div>

            <div className='progress-bar'>
              <p className='prog-title'>javascript</p>
              <div className='progress-con'>
                <p className='prog-text'>80%</p>
                <div className='progress'>
                  <span className='js'></span>
                </div>
              </div>
            </div>
            <div className='progress-bar'>
              <p className='prog-title'>Express</p>
              <div className='progress-con'>
                <p className='prog-text'>80%</p>
                <div className='progress'>
                  <span className='express'></span>
                </div>
              </div>
            </div>
            <div className='progress-bar'>
              <p className='prog-title'>NodeJS</p>
              <div className='progress-con'>
                <p className='prog-text'>70%</p>
                <div className='progress'>
                  <span className='node'></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className='stat-title'>My Timeline</h4>
        <div className='timeline'>
          <div className='timeline-item'>
            <div className='tl-icon'>
              <i className='fas fa-briefcase'></i>
            </div>
            <p className='tl-duration'>2022 - present</p>
            <h5>
              System Engineer<span> - Inffosys LTD</span>
            </h5>
            <p>
              I have developed and maintained code for various clients, focusing
              on key technologies such as ReactJS, NextJS, and Angular with
              Ionic.
            </p>
          </div>
          <div className='timeline-item'>
            <div className='tl-icon'>
              <i className='fas fa-briefcase'></i>
            </div>
            <p className='tl-duration'>2021 - 2022</p>
            <h5>
              Web Developer<span> - Aashdit Technology</span>
            </h5>
            <p>
              Developed and maintained code for in-house and client websites
              primarily using HTML, CSS, Sass, JavaScript, and jQuery
            </p>
          </div>
          <div className='timeline-item'>
            <div className='tl-icon'>
              <i className='fas fa-briefcase'></i>
            </div>
            <p className='tl-duration'>2020 - 2021</p>
            <h5>
              Front-End Developer (Intern)<span> - Ats Global Techsoft</span>
            </h5>
            <p>
              Developed and maintained code for in-house and client websites
              primarily using HTML, CSS, Sass, JavaScript, and jQuery
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
