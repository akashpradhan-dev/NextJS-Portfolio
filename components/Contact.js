import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const Contact = () => {
  const form = useRef();
  const message = useRef(null);


  const sendMessage = (e) => {
    e.preventDefault();

    message.current.innerHTML = 'Sending...';

    emailjs.sendForm('service_71cw1qg', "template_qgwqxz7", e.target, 'user_ijb1Aho83MCDL5Yslh4ng')
      .then((result) => {
        message.current.innerHTML = 'Send Message'
        toast.success('Message sent successfully!')
        console.log(result);
      }, (error) => {
        toast.error('Message not sent!')
      });

    form.current.reset();
  }

  return (
    <>
      <section className='section sec5 contact active' id='contact'>
        <div className='contact-container'>
          <div className='main-title'>
            <h2>
              Contact <span>Me</span>
              <span className='bg-text'>Contact</span>
            </h2>
          </div>
          <div className='contact-content-con'>
            <div className='left-contact'>
              <p>
                I’m currently looking for a new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>

              <div className='contact-icons'>
                <div className='contact-icon'>
                  <a href='https://www.linkedin.com/in/akash-pradhan/' target='_blank'>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href='https://twitter.com/EnterAkash' target='_blank'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='https://github.com/Akashpradhan-Git' target='_blank'>
                    <i className='fab fa-github'></i>
                  </a>
                  <a href='https://www.youtube.com/channel/UCEA2iXeH-XnjyVsLcUpYkdw' target='_blank'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='right-contact'>
              <form ref={form} onSubmit={sendMessage} className='contact-form'>
                <div className='input-control i-c-2'>
                  <input name="name" type='text' required placeholder='YOUR NAME' />
                  <input name="user_email" type='email' required placeholder='YOUR EMAIL' />
                </div>

                <div className='input-control'>
                  <textarea
                    name='user_msg'

                    cols='15'
                    rows='8'
                    placeholder='Message Here...'></textarea>
                </div>
                <div className='submit-btn'>
                  <button type="submit" className='main-btn'>
                    <span id="sendbtn" ref={message} className='btn-text'>Send Message</span>
                    <span className='btn-icon'>
                      <i className="fas fa-paper-plane"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
