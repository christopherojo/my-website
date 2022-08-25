import './Project.css'
import MCATBackground from '../Images/MCATPrepGame.png';

const Header = () => {
  return (
    <div className='project-header' style={{backgroundImage: `url(${MCATBackground})`}}>
      <div id='mcat-title'className='project-header-title'>
        <h1>MCAT Prep Game</h1>
        <a href='https://github.com/christopherojo/MCAT-Prep-Game' target='_blank'>
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
          <p>MCAT Prep Game is a medical quiz game that puts a twist on normal flash cards by adding engaging visual elements alongside an exciting story</p>
        </div>
        <div className='project-tools'>
          <h1>Technologies used</h1>
          <div className='project-tools-spread'>
            <p>Python</p>
            <p>Ren'Py</p>
          </div>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>With the MCAT coming up for many young adults preparing to be doctors and other medical professionals, we decided that studying could be made more fun and enjoyable by turning it into a game-like scenario.</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>Our game allows users to answer 80+ MCAT preparation questions in a pseudo-random order on every playthrough. Alongside stunning visuals, it encourages students to replay the game numerous times in addition to studying for the MCAT.</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>With previous knowledge of Python, we used the Ren'Py visual novel engine to create an interactive visual knowledge of our own. The code involves a mix of preset Ren'Py commands and Python code snippets to balance images with game logic and flow.</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>Since Ren'Py was similar the Python, it was not too difficult to learn how to begin creating the visual novel. The problems came when we had to integrate Python code snippets into the Ren'Py script since the syntax isn't exactly the same. In particular creating the randomly generated question order on each playthrough caused significant problems before it was solved.</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>We are proud of our ability to complete an education game that is in the process of being deployed to steam so that all students can download it.</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>We learned how to use the Ren'Py visual novel engine in addition to gaining experience in the game development process.</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <p>Complete the Steam Game Development process and successfully post the game to the Steam Game Portal.</p>
        </div>
      </div>
    </div>
  );
}

const MCAT = () => {
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

export default MCAT;