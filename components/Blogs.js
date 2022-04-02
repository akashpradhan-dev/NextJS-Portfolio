import React from "react";
import Image from "next/image";
const Blogs = () => {
  return (
    <>
      <section className='section sec4 active' id='blogs'>
        <div className='blogs-content'>
          <div className='main-title'>
            <h2>
              My <span>Blogs</span>
              <span className='bg-text'>My Blogs</span>
            </h2>
          </div>
          <div className='blogs'>
            <div className='blog'>
              {/* <img src="/blog/images.jpg" alt="" /> */}


              <Image src="/blog/images.jpg" width={500} height={480} className="image" alt="" />
              <a href="https://enterakash.hashnode.dev/10-best-free-css-animation-libraries-for-the-web" className='blog-text' target='_blank' rel="noopener noreferrer">
                <h4>10 Best Free CSS Animation Libraries For The Web</h4>
                <p>
                  There are an awful lot of libraries that want to help you animate things on the web and make your website more attractive.
                </p>
              </a>
            </div>
            <div className='blog'>
              {/* <img src="/blog/vsCode.jpg" alt="" /> */}
              <Image src="/blog/vsCode.jpg" width={500} height={480} alt="" />
              <a href="https://enterakash.hashnode.dev/top-vs-code-extensions-that-i-use-as-full-stack-developer" target='_blank' rel="noopener noreferrer" className='blog-text'>
                <h4>Top VS Code extensions</h4>
                <p>
                  Top VS Code extensions that I use as full-stack developer.
                </p>
              </a>
            </div>
            <div className='blog'>

              <Image src="/blog/npm.jpg" width={500} height={480} alt="" />
              <a href="https://manindu.dev/list-of-useful-npm-packages-for-react-developers/" target='_blank' rel="noopener noreferrer" className='blog-text'>
                <h4>A List of Useful npm Packages for React Developers</h4>
                <p>
                  Top Useful npm packages for React developers
                </p>
              </a>
            </div>
            <div className='blog'>
              {/* <img src="/blog/debug.png" alt="" /> */}
              <Image src="/blog/debug.png" width={500} height={480} alt="" />
              <a href="https://codeburst.io/learn-how-to-debug-javascript-with-chrome-devtools-9514c58479db" className='blog-text' target="_blank" rel="noopener noreferrer">
                <h4>Debbuging made easy with Web Inspector</h4>
                <p>
                  Ditch console.log debugging once and for all! Learn how to use breakpoints to debug code within the Chrome Developer Tools
                </p>
              </a>
            </div>
            <div className='blog'>

              <Image src="/blog/css.png" width={500} height={480} alt="" />
              <a href="https://enterakash.hashnode.dev/top-10-free-css-generators-tool" target='_blank' rel="noopener noreferrer" className='blog-text'>
                <h4>Top 10 Free CSS Generators Tool</h4>
                <p>
                  Top 10 Free CSS Generators Tool. Time-saving shortcuts to improve your workflow.
                </p>
              </a>
            </div>
            <div className='blog'>
              {/* <img src="/blog/website.jpg" alt="" /> */}
              <Image src="/blog/website.jpg" width={500} height={480} alt="" />
              <a href="https://gist.github.com/bradtraversy/61171a9b81586f5bc4c0ca1e2beb59ab" className='blog-text'>
                <h4>Top web resources that makes your life easier</h4>
                <p>
                  Websites You Should Know To Make Your Life Easier
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
