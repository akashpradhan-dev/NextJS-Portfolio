import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Theme from "./Theme";
const NavControlls = () => {
  const router = useRouter();
  return (
    <>
      <div className='controlls'>
        <Link href={'/'}>
          <div className={`${"control  control-1"} ${router.pathname == '/' ? "active-btn" : ""}`} data-id='home'>
            <i className='fas fa-home'></i>
          </div>
        </Link>

        <Link href={'/about'}>
          <div className={`${"control  control-2"} ${router.pathname == '/about' ? "active-btn" : ""}`} data-id='about'>
            <i className='fas fa-user'></i>
          </div>
        </Link>

        <Link href={'/portfolio'}>
          <div className={`${"control  control-3"} ${router.pathname == '/portfolio' ? "active-btn" : ""}`} data-id='portfolio'>
            <i className='fas fa-briefcase'></i>
          </div>
        </Link>

        <Link href={'/blog'}>
          <div className={`${"control  control-4"} ${router.pathname == '/blog' ? "active-btn" : ""}`} data-id='blogs'>
            <i className='far fa-newspaper'></i>
          </div>
        </Link>
        <Link href={'/contact'}>
          <div className={`${"control  control-5"} ${router.pathname == '/contact' ? "active-btn" : ""}`} data-id='contact'>
            <i className='fas fa-envelope-open'></i>
          </div>
        </Link>
      </div>

      <Theme />
    </>
  );
};

export default NavControlls;
