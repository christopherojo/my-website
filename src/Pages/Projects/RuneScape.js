import './Project.css'
import RuneScapeBackground from '../Images/RuneScape2.0.png';

const Header = () => {
  return (
    <div className='project-header' style={{backgroundImage: `url(${RuneScapeBackground})`}}>
      <div id='runescape-title'className='project-header-title'>
        <h1>RuneScape 2.0</h1>
        <a href='https://github.com/raymondzli/Group12_2250_FinalProject' target='_blank'>
          <h3>GitHub Repository</h3>
        </a>
      </div>
    </div>
  );
}

const Information = () => {
  return (
    <div className='project-info'>
      <div className='project-description'>
        <div className='project-summary'>
          <h1>About</h1>
          <p>RuneScape 2.0 is a 3D Adventure Game built on Unity that involves a creative story, unique characters, and a compelling combat system.</p>
        </div>
        <div className='project-tools'>
          <h1>Technologies used</h1>
          <div className='project-tools-spread'>
            <p>Unity</p>
            <p>C#</p>
            <p>Git</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>Our goal was to create a game that would challenge our coding capabilities while being recognizable and fun for all our classmates.</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>This game prompts the user to select one of 3 charcters: a swordsman, an archer, and a martial artist. Each character with unique abilities and stats. After your character is chosen, you are placed in a world with sparkles guiding you where to go and quests to complete. As you complete all the quests, your character begins stronger and you are led to face the final boss. The final battle takes place in a run-down castle fighting a huge dragon. After the boss is defeated you are shown a satisfying victory screen. Don't be fooled, its not as easy as it sounds!</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>We used the Unity Game Engine to create the game. Unity enabled us to easily attach code to 3D game elements and produce this game. The coding language used in Unity is C#. The motion and dynamic elements of the game were programmed using C#. Lastly, the game development requirements were track and shared using git and GitHub.</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>C# is a very strict language when it comes to programming, so it was hard to make sure every line was up to programming standards. The collision detection, especially in relation to the combat system, provided many problems as understanding how the code connects to the 3D models was difficult to conceptualize.</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>We are proud of being able to complete this project while following the industry process of game development, such as planning, implementing, testing, and deployment and maintenence.</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>We improved on our C# skills and learned how to use the Unity Game Engine. In addition to this we learned how to implement real physics equations into a virtual game.</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <p>Deploy the complete game to the Steam Workshop. Add more levels to the game. Fix some bugs. Add more characters.</p>
        </div>
      </div>
    </div>
  );
}

const Split = () => {
  return (
    <div className='main'>
      <section className='section-header'>
        <Header />
      </section>
      <section className='section-project-info'>
        <Information />
      </section>
    </div>
  );
}

export default Split;