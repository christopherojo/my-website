import './Home.css'
import LinkedIn from './Images/LinkedIn.jpg'
import Split from './Images/SplitHome.jpg'
import SpeedStocks from './Images/SpeedStocksGameConcept.jpg'
import YouFirst from './Images/YouFirstHome.jpg'
import PasswordGenerator from './Images/PasswordGeneratorHome.jpg'
import { Link } from 'react-router-dom';

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
      <div className='photo-container'>
        <div className='photo'>
          <img id="profile" src={LinkedIn} alt="Profile"/>
        </div>
      </div>
      <div className='summary'>
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
                <p>Puzzles, coding, trading/investing, data analysis, mathematics, basketball</p>
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
          <div>
            <div className='project-item'>
              <h3>Split</h3>
              <div>
                <Link to='/projects/split'>
                  <img id='split' alt='$Split' src={Split} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div>
            <div className='project-item'>
              <h3>Speed Stocks</h3>
              <div>
                <Link to='/projects/speedstocks'>
                  <img id='speedstocks' alt='Speed Stocks' src={SpeedStocks} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div>
            <div className='project-item'>
              <h3>You First</h3>
              <div>
                <Link to='/projects/youfirst'>
                  <img id='youfirst' alt='You First' src={YouFirst} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='project-item-border'>
          <div>
            <div className='project-item'>
            <h3>Password Generator</h3>
            <div>
              <Link to='/projects/passwordgenerator'>
                <img id='passwordgenerator' alt='Password Generator' src={PasswordGenerator} />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='overlap'>
        <div className='overlap2'>
          <div className='overlap3'></div>
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
            <div>
              <h5>August 2022 - </h5>
              <h5>Present</h5>
            </div>
          </div>
          <div className='experience-point'>
            <div className='experience-header'>
              <div className='node-container'>
                <div className='node'></div>
              </div>
              <div className='experience-position'>
                <h3>Senior Director of Finance</h3>
                <h4>Western AI Club</h4>
                <h5>August 2022 - Present</h5>
              </div>
            </div>
            <div className='experience-info'>
              <div className='tail-container'>
                <div className='tail'></div>
              </div>
              <ul>
              </ul>
            </div>
          </div>
        </div>
        <div className='experience-item'>
          <div className='experience-date'>
            <div>
              <h5>May 2021 - </h5>
              <h5>Present</h5>
            </div>
          </div>
          <div className='experience-point'>
            <div className='experience-header'>
              <div className='node-container'>
                <div className='node'></div>
              </div>
              <div className='experience-position'>
                <h3>Co-Founder and Software Developer</h3>
                <h4>Vaerion</h4>
                <h5>May 2021 - Present</h5>
              </div>
            </div>
            <div className='experience-info'>
              <div className='tail-container'>
                <div className='tail'></div>
              </div>
              <ul>
                <li>Produced a successful crypto trading bot that averages 15% profit per month in back-testing results using Python, Ta-Lib Math models, Bybit API, and Pandas.</li>
                <li>Formulated an algorithm to read and store data from the Bybit trading website then write it to an excel file using Python and Bybit API.</li>
                <li>Created a command-line user interface to allow the user to easily access and change the bot settings to their preferred strategies using multi-threading, pandas and numpy for data printing and bot settings adjustment.</li>
                <li> Established a Discord Bot to read and print signals to certain channels in the Discord Server from the analyzed data using discord.py and repl.it.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='experience-item'>
          <div className='experience-date'>
            <div>
              <h5>May 2021 - </h5>
              <h5>October 2021</h5>
            </div>
          </div>
          <div className='experience-point'>
            <div className='experience-header'>
              <div className='node-container'>
                <div className='node'></div>
              </div>
              <div className='experience-position'>
                <h3>Software Developer</h3>
                <h4>Opal LLC</h4>
                <h5>May 2021 - October 2021</h5>
              </div>
            </div>
            <div className='experience-info'>
              <div className='tail-container'>
                <div className='tail'></div>
              </div>
              <ul>
                <li>Developed a program to create and perform transactions with an XRP wallet using the xrpl-py library to store, send, and receive XRP currency and NFTs across multiple wallets and write their information to the ripple ledger.</li>
                <li>Incorporated Anima and Figma framework designs into engaging web pages using React and Node.js.</li>
                <li>Implemented multiple databases into the Opal website to store user data and NFT data using MongoDB.</li>
                <li>Engineered an application to break down a users secret recovery pass phrase into its private key, public key, and public address to use for wallet creation and manipulation using Python and JavaScript.</li>
              </ul>
            </div>
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
        <div id='education-first-item' className='experience-item'>
          <div className='experience-date'>
            <h5>2020 - 2025</h5>
          </div>
          <div className='experience-point'>
            <div className='experience-header'>
              <div className='node-container'>
                <div className='node'></div>
              </div>
              <div className='experience-position'>
                <h3>BESc. Software Engineering</h3>
                <h4>University of Western Ontario</h4>
                <h5>2020 - 2025</h5>
              </div>
            </div>
            <div className='experience-info'>
              <div className='tail-container'>
                <div className='tail'></div>
              </div>
              <ul>
                <li>
                  <b>Key Courses: </b>Algorithms & Data Structures, Software Design, Software Construction, Scripting Fundamentals, Programming Fundamentals, Digital Logic Systems, Discrete Math, Statistics
                </li>
                <li>
                  <b>Languages: </b>Java, JavaScript, HTML, CSS, SQL, C#, Git
                </li>
                <li>
                  <b>Other Skills: </b> Design Thinking, Breakdown work into manageable tasks, Organize teams to complete work, Assemble partitions of projects, Simplify complex topics
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='experience-item'>
          <div className='experience-date'>
            <h5>2020 - 2025</h5>
          </div>
          <div className='experience-point'>
            <div className='experience-header'>
              <div className='node-container'>
                <div className='node'></div>
              </div>
              <div className='experience-position'>
                <h3>Ivey Honours Business Administration</h3>
                <h4>University of Western Ontario</h4>
                <h5>2020 - 2025</h5>
              </div>
            </div>
            <div className='experience-info'>
              <div className='tail-container'>
                <div className='tail'></div>
              </div>
              <ul>
                <li>
                  <b>Key Courses: </b>Leveraging Information Technology, Strategy, Finance, Communications, Operations, Decision Making with Analytics, Leading People in Organizations, Learning Through Action
                </li>
                <li>
                  <b>Soft Skills: </b>Leadership, Collaboration, Quick Learning, Clear Communication, Financial Planning
                </li>
                <li>
                  <b>Other Skills: </b>Excel, Powerpoint, Canva
                </li>
              </ul>
            </div>
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
              <h4>12+ Months Experience</h4>
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
            <h4>3+ years experience</h4>
          </div>
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
      <section id='about-me' className='section-about-me'>
        <AboutMe />
      </section>
      <section id='projects'  className='section-projects'>
        <Projects />
      </section>
      <section id='experience'  className='section-experience'>
        <Experience />
      </section>
      <section id='education'  className='section-education'>
        <Education />
      </section>
      <section id='extracurriculars' className='section-extracurriculars'>
        <Hobbies />
      </section>
    </div>
  );
};

export default Home;