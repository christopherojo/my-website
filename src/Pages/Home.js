import './Home.css'
import LinkedIn from './Images/LinkedIn.jpg'
import Sunset from './Images/Sunset.png'
import Windows from './Images/Linked Windows.jpg'

const Introduction = () => {
  return (
    <div className='introduction'>
      <h1>Hello! :D</h1>
      <h5>I'm Christopher Ojo, an Ivey HBA and Software Engineering Dual Degree student at the University of Western Ontario as well as an aspiring software developer and data scientist.</h5>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div className='title'>
        <h1>About Me</h1>
      </div>
      <div className='summary'>
        <div className='photo'>
          <img id="profile" src={LinkedIn} alt="Profile"/>
        </div>
        <div className='my-info-background'>
          <div className='my-info'>
            <div className='first'>
              <div className='coop'>
                <div className='info-title'>
                  <h3>
                    <i class="fa-solid fa-briefcase"></i>
                  </h3>
                  <h3>Current Co-op</h3>
                </div>
                <p>Software Developer @ Vaerion</p>
              </div>
              <div className='education'>
                <div className='info-title'>
                  <h3>
                  <i class="fa-solid fa-graduation-cap"></i>
                  </h3>
                  <h3>Education</h3>
                </div>
                <p>BESc. Software Engineering, Ivey Business Administration, Honours</p>
                <p>University of Western Ontario @ Ontario, Canada</p>
                <p>Cumulative GPA: 3.9</p>
              </div>
            </div>
            <div className='second'>
              <div className='skills'>
                <div className='info-title'>
                  <h3>
                  <i class="fa-solid fa-microchip"></i>
                  </h3>
                  <h3>Programming Expertise</h3>
                </div>
                <p>
                  <b>Languages: </b>
                  Python, Java, HTML, CSS, JavaScript/TypeScript (ThinkScript),  C/C++, C#, SQL (MySQL) 
                </p>
                <p>
                  <b>Frameworks: </b>
                  Pandas, NumPy, Matplotlib, Jupyter Notebook, JavaFx, Node.js, React, Git
                </p>
              </div>
              <div className='hobbies'>
                <div className='info-title'>
                  <h3>
                    <i class="fa-solid fa-basketball"></i>
                  </h3>
                  <h3>Hobbies</h3>
                </div>
                <p>Puzzles, coding, trading/investing, data analysis, mathematics, basketball,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div>
      <div className='title'>
        <h1>My Projects</h1>
      </div>
      <div className='project-spread'>
        <div className='project-item-border'>
          <div className='project-item'>
            <h3>Project 1</h3>
            <div>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img alt='Project 1' src={Sunset} />
              </a>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div className='project-item'>
            <h3>Project 2</h3>
            <div>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img alt='Project 2' src={Sunset} />
              </a>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div className='project-item'>
            <h3>Project 3</h3>
            <div>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img alt='Project 3' src={Sunset} />
              </a>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div className='project-item'>
            <h3>Project 4</h3>
            <div>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img alt='Project 4' src={Sunset} />
              </a>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div className='project-item'>
            <h3>Project 5</h3>
            <div>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img alt='Project 5' src={Sunset} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <div className='experience'>
      <div>
        <h1>My Experience</h1>
      </div>
      <div className='experience-spread'>
        <div className='experience-item'>
          <div className='experience-date'>
            <h5>July 2022 - </h5>
            <h5>August 2022</h5>
          </div>
          <div className='experience-point'>
            <img id='node' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png' />
            <img id='node-tail' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Location_arithmetic_vertical.svg/1024px-Location_arithmetic_vertical.svg.png' />
          </div>
          <div className='experience-info'>
            <h3>Position</h3>
            <h4>Where</h4>
            <li>Information1</li>
            <li>Information2</li>
            <li>Information3</li>
          </div>
        </div>
        <div className='experience-item'>
          <div className='experience-date'>
            <h5>July 2022 - </h5>
            <h5>August 2022</h5>
          </div>
          <div className='experience-point'>
            <img id='node' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png' />
            <img id='node-tail' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Location_arithmetic_vertical.svg/1024px-Location_arithmetic_vertical.svg.png' />
          </div>
          <div className='experience-info'>
            <h3>Position</h3>
            <h4>Where</h4>
            <li>Information1</li>
            <li>Information2</li>
            <li>Information3</li>
          </div>
        </div>
        <div className='experience-item'>
          <div className='experience-date'>
            <h5>July 2022 - </h5>
            <h5>August 2022</h5>
          </div>
          <div className='experience-point'>
            <img id='node' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png' />
            <img id='node-tail' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Location_arithmetic_vertical.svg/1024px-Location_arithmetic_vertical.svg.png' />
          </div>
          <div className='experience-info'>
            <h3>Position</h3>
            <h4>Where</h4>
            <li>Information1</li>
            <li>Information2</li>
            <li>Information3</li>
          </div>
        </div>
      </div>
    </div>
  );
}

const Education = () => {
  return (
    <div className='experience'>
      <div className='education-title'>
        <h1>My Education</h1>
      </div>
      <div className='experience-spread'>
        <div style={{paddingTop:'50px'}} className='experience-item'>
          <div className='experience-date'>
            <h5>2020 - 2025</h5>
          </div>
          <div className='experience-point'>
            <img id='node' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png' />
            <img id='node-tail' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Location_arithmetic_vertical.svg/1024px-Location_arithmetic_vertical.svg.png' />
          </div>
          <div className='experience-info'>
            <h3>Position</h3>
            <h4>Where</h4>
            <li>Information1</li>
            <li>Information2</li>
            <li>Information3</li>
          </div>
        </div>
        <div className='experience-item'>
          <div className='experience-date'>
            <h5>2020 - 2025</h5>
          </div>
          <div className='experience-point'>
            <img id='node' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png' />
            <img id='node-tail' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Location_arithmetic_vertical.svg/1024px-Location_arithmetic_vertical.svg.png' />
          </div>
          <div className='experience-info'>
            <h3>Position</h3>
            <h4>Where</h4>
            <li>Information1</li>
            <li>Information2</li>
            <li>Information3</li>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hobbies = () => {
  return (
    <div>
      <div className='extracurriculars'>
        <h1>My Extracurriculars and Hobbies</h1>
      </div>
      <div className='extracurricular-spread'>
        <div className='extracurricular-panel'>
          <div id='trading'>
            <div className='extracurricular'>
              <h3>Trading & Investing</h3>
              <h4>2+ years experience</h4>
            </div>
          </div>
          <div className='extracurricular'>
            <h3>Chess & Puzzles</h3>
            <h4>Chess Club President</h4>
          </div>
        </div>
        <div className='extracurricular-panel'>
          <div className='extracurricular'>
            <h3>Basketball & Athletics</h3>
            <h4>Basketball Captain</h4>
          </div>
        </div>
        <div className='extracurricular-panel'>
          <div className='extracurricular'>
            <h3>Programming</h3>
            <h4>5+ years experience</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
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
    </div>
  );
}

const Home = () => {
  return (
    <div className='main'>
      <section className='section-welcome'>
        <Introduction />
      </section>
      <section id='ref-about-me' className='section-about-me'>
        <AboutMe />
      </section>
      <section id='ref-projects'  className='section-projects'>
        <Projects />
      </section>
      <section id='ref-experience'  className='section-experience'>
        <Experience />
      </section>
      <section id='ref-education'  className='section-education'>
        <Education />
      </section>
      <section id='ref-extracurriculars' className='section-extracurriculars'>
        <Hobbies />
      </section>
      <section id='ref-contact' className='section-contact'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;