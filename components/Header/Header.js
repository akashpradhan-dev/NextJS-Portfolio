import React from "react";
import Image from 'next/image'
import style from '../../styles/custom.module.css'
const Header = () => {
  return (
    <>
      <header className='section sec1 header active' id='home'>
        <div className='header-content'>
          <div className='left-header'>
            <div className='h-shape'></div>
            <div className={`${'image'} ${style.image_small}`}>
              {/* <img src="/me2.png" alt="" /> */}
              <div style={{ width: '100%', height: '99%', position: 'relative' }}>
                <Image src="/bgg2.png" className={style.photo} layout='fill' alt="" />
              </div>
            </div>
          </div>
          <div className='right-header'>
            <h1 className='name'>
              Hi, I&apos; m <span>Akash.</span><br />A Web Developer.
            </h1>
            <p>
              I&apos; m a Web Developer, I love to create beautiful and functional
              websites.
            </p>
            <div className='btn-con'>
              <a href='/cv.pdf' download={"Akash's Resume"} className='main-btn'>
                <span className='btn-text'>Download CV</span>
                <span className='btn-icon'>
                  <i className='fas fa-download'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
