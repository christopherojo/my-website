import './Home.css'
import LinkedIn from './Images/LinkedIn.jpg'
import Sunset from './Images/Sunset.png'
import Windows from './Images/Linked Windows.jpg'

const Introduction = () => {
  return (
    <div className='introduction'>
      <h1>Hello! :D</h1>
      <h5>I'm Christopher Ojo, an Ivey and Software Engineering Dual Degree student at the University of Western Ontario as well as an aspiring software developer and data scientist.</h5>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div>
        <h1>About Me</h1>
      </div>
      <div className='summary'>
        <div className='photo'>
          <img id="profile" src={LinkedIn} alt="Profile Picture"/>
        </div>
        <div className='my-info-background'>
          <div className='my-info'>
            <div className='first'>
              <div className='coop'>
                <h3>Current Co-op</h3>
                <p>Software Developer @ Vaerion</p>
              </div>
              <div className='education'>
                <h3>Current Education</h3>
                <p>BESc. Software Engineering, HBA Ivey, Honours</p>
                <p>University of Western Ontario @ Ontario, Canada</p>
                <p>Cumulative GPA: 3.9</p>
              </div>
            </div>
            <div className='second'>
              <div className='skills'>
                <h3>Programming Expertise</h3>
                <p>
                  <b>Languages: </b>
                  Python, Java, HTML, CSS, JavaScript/TypeScript,  C/C++, C# 
                </p>
                <p>
                  <b>Frameworks: </b>
                  Pandas, NumPy, Matplotlib, Jupyter Notebook, JavaFx Node.js, React, Git
                </p>
              </div>
              <div className='hobbies'>
                <h3>Hobbies</h3>
                <p>Puzzles, coding, trading/investing, data analysis, mathematics, basketball,</p>
              </div>
            </div>
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
      <br></br>
      <section className='section-about-me'>
        <AboutMe />
      </section>
      <div className='sum'>
        <table>
          <td style={{width: "30%", paddingRight: "3%"}}>
            <div>
              <img className="profile" src={LinkedIn} alt="Profile Picture"/>
            </div>
          </td>
          <td style={{textAlign: 'center', verticalAlign: 'middle'}}>
            <div className='introText'>
              <h2>Hi! I am Christopher!</h2>
              <p>I am a second year software engineering student at Western University!</p>
            </div>
          </td>
        </table>
      </div>
      <img className="background-photo" src={Sunset} alt="Sunset Photo" />
      <h1>About Me</h1>
      <div className='working'>
        <p>Tandom words</p>
      </div>
      <h1>Skills</h1>
      <div className='working'>
        <p>Tandom words</p>
      </div>
      <h1>Experience</h1>
      <div className='working'>
        <p>Tandom words</p>
      </div>
      <h1>Projects</h1>
      <div className='working'>
        <p>Tandom words</p>
      </div>
      <h1>Hobbies</h1>
      <div className='working'>
        <p>Tandom words</p>
      </div>
      <a id="connect"></a>
      <h1 className="connectHeader">Connect</h1>
      <div className='connect'>
        <p>Tandom words</p>
      </div>
    </div>
  );
};

export default Home;