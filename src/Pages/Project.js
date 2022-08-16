import './Project.css'

const Header = () => {
  return (
    <div className='project-header'>
      <div className='project-header-title'>
        <h1>Project Name</h1>
        <h3>Project Link</h3>
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
          <p>Super Genius</p>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>Super Genius</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>Super Genius</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>Super Genius</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>Super Genius</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>Super Genius</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>Super Genius</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <a href='https://devpost.com/software/split-nlrmib' target='_blank'>
            <p>Taken from Devpost</p>
          </a>
        </div>
      </div>
    </div>
  );
}

const Project = () => {
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

export default Project;