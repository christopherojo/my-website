import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className="section-contact">
      <div className='contact'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact-spread'>
        <div className='contact-info'>
          <a id='email' href='mailto:christopherojo617@gmail.com' target='_blank'>
            <div className='contact-hover'>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className='tooltip'>Email</div>
          </a>
        </div>
        <div className='contact-info'>
          <a id='discord' href='https://discordapp.com/users/218099031388323841' target='_blank'>
            <div className='contact-hover'>
              <i class="fa-brands fa-discord"></i>
            </div>
            <div className='tooltip'>Discord</div>
          </a>
        </div>
        <div className='contact-info'>
          <a id='linked-in' href='https://www.linkedin.com/in/christopher-ojo/' target='_blank'>
            <div className='contact-hover'>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='tooltip'>LinkedIn</div>
          </a>
        </div>
        <div className='contact-info'>
          <a id='github' href='https://github.com/christopherojo' target='_blank'>
            <div className='contact-hover'>
              <i class="fa-brands fa-github"></i>
            </div>
            <div className='tooltip'>Github</div>
          </a>
        </div>
        <div className='contact-info'>
          <a id='instagram' href='https://www.instagram.com/cookiedough.ojo/' target='_blank'>
            <div className='contact-hover'>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className='tooltip'>Instagram</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;