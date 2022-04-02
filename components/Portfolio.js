import React from "react";
import Image from "next/image";
const Portfolio = () => {
  return (
    <>
      <section className='section sec3 active' id='portfolio'>
        <div className='main-title'>
          <h2>
            My <span>Portfolio</span>
            <span className='bg-text'>My Work</span>
          </h2>
        </div>
        <p className='port-text'>
          Here is some of my work that I&apos; ve done in various programming
          languages.
        </p>
        <div className='portfolios'>
          <div className='portfolio-item'>
            <div className='image'>
              <Image src="/portfolio/blog.jpg" layout="fill" alt="" />
              {/* <img src="/portfolio/blog.jpg" alt="" /> */}
            </div>
            <div className='hover-items'>
              <h3>Project Source</h3>
              <div className='icons'>
                <a href='https://github.com/Akashpradhan-Git/My-NodeJS_blogs' target="_blank" className='icon' rel="noopener noreferrer">
                  <i className='fab fa-github'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-behance'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='image'>
              <Image src="/portfolio/blog2.png" layout="fill" alt="" />
            </div>
            <div className='hover-items'>
              <h3>Project Source</h3>
              <div className='icons'>
                <a href='https://github.com/Akashpradhan-Git/News-Feed-App' target='_blank' className='icon' rel="noopener noreferrer">
                  <i className='fab fa-github'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-behance'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='image'>
              <Image src="/portfolio/urls.jpg" layout="fill" alt="" />
            </div>
            <div className='hover-items'>
              <h3>Project Source</h3>
              <div className='icons'>
                <a href='https://github.com/Akashpradhan-Git/urlShortener' target="_blank" className='icon' rel="noopener noreferrer">
                  <i className='fab fa-github'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-behance'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='image'>
              <Image src="/portfolio/REactPage.png" layout="fill" alt="" />
            </div>
            <div className='hover-items'>
              <h3>Project Source</h3>
              <div className='icons'>
                <a href='https://react-landingpage.netlify.app/' rel="noopener noreferrer"
                  target='_blank' className='icon'>
                  <i className="fas fa-globe-europe"></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-behance'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='image'>
              <Image src="/portfolio/webstu.png" layout="fill" alt="" />
            </div>
            <div className='hover-items'>
              <h3>Project Source</h3>
              <div className='icons'>
                <a href='https://webstudent.netlify.app/' target='_blank' className='icon' rel="noopener noreferrer">
                  <i className="fas fa-globe-europe"></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-behance'></i>
                </a>
                <a href='#' className='icon'>
                  <i className="fas fa-globe-europe"></i>
                </a>
              </div>
            </div>
          </div>
          <div className='portfolio-item'>
            <div className='image'>
              <Image src="/portfolio/bus.png" layout="fill" alt="" />
            </div>
            <div className='hover-items'>
              <h3>Project Source</h3>
              <div className='icons'>
                <a href='https://trackmybus.netlify.app/' target='_blank' className='icon' rel="noopener noreferrer">
                  <i className='fab fa-github'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-behance'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
