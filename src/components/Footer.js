import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Sharu Khan</h4>
            <p>© {year} Sharukhan All rights reserved</p>
            <p className='d-flex'>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sharukhan-a-9aa71321a/"><i className='fa-brands fa-linkedin mx-3' ></i></a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Feel free to get connected with me via email or Social Media if you liked my work or if you want to hire me.</p>
            <p>✉️ sharukajmal2@gmail.com</p>
            <p>📱 +974 71740618</p>
          </div>
          <div className="third mt-5">
            <h4>About Me</h4>
            <p>Competitive Programmer <br/> MERN Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer