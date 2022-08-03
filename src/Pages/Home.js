import './Home.css'
import LinkedIn from './Images/LinkedIn.jpg'
import Sunset from './Images/Sunset.png'

const Home = () => {
  return (
    <div className='main'>
      <h1>Main Picture</h1>
      <img className="background-photo" src={Sunset} alt="Sunset Photo" />
      <div className='introduction'>
        <table>
          <td style={{width: "30%", paddingRight: "30px"}}>
            <div>
              <img className="profile" src={LinkedIn} alt="Profile Picture"/>
            </div>
          </td>
          <td style={{textAlign: 'left', verticalAlign: 'middle'}}>
            <div className='introText'>
              <h2>Hi! I am Christopher!</h2>
              <p>I am a second year software engineering student at Western University!</p>
            </div>
          </td>
        </table>
      </div>
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