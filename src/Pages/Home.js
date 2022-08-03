import './Home.css'
import LinkedIn from './Images/LinkedIn.jpg'
import Sunset from './Images/Sunset.png'
import Windows from './Images/Linked Windows.jpg'

const Home = () => {
  return (
    <div className='main'>
      <section className='section-welcome'>
        <div className='introduction'>
          <h1>Hello! :D</h1>
          <h5>I'm Christopher Ojo, an Ivey and Software Engineering Dual Degree student at the University of Western Ontario as well as an aspiring software developer and data scientist.</h5>
        </div>
        <img className="background-photo" src={Sunset} alt="Sunset Photo" />
        <div className='summary'>
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
      </section>
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