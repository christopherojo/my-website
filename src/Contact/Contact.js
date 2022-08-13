import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className="section-contact">
      <div className='contact'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact-spread'>
        <div className='contact-info'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <div id='email'>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className='tooltip'>Email</div>
          </a>
        </div>
        <div className='contact-info'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <div id='discord'>
              <i class="fa-brands fa-discord"></i>
            </div>
            <div className='tooltip'>Discord</div>
          </a>
        </div>
        <div className='contact-info'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <div id='linked-in'>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='tooltip'>LinkedIn</div>
          </a>
        </div>
        <div className='contact-info'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <div id='github'>
              <i class="fa-brands fa-github"></i>
            </div>
            <div className='tooltip'>Github</div>
          </a>
        </div>
        <div className='contact-info'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            <div id='instagram'>
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