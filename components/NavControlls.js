import React from "react";

const NavControlls = () => {
  return (
    <>
      <div className='controlls'>
        <div className='control  control-1 active-btn' data-id='home'>
          <i className='fas fa-home'></i>
        </div>
        <div className='control control-2 ' data-id='about'>
          <i className='fas fa-user'></i>
        </div>
        <div className='control control-3' data-id='portfolio'>
          <i className='fas fa-briefcase'></i>
        </div>
        <div className='control control-4' data-id='blogs'>
          <i className='far fa-newspaper'></i>
        </div>
        <div className='control control-5' data-id='contact'>
          <i className='fas fa-envelope-open'></i>
        </div>
      </div>
    </>
  );
};

export default NavControlls;
