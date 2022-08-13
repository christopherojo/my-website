import './Project.css'

const Header = () => {
  return (
    <div>

    </div>
  );
}

const Information = () => {
  return (
    <div>
      <div className='project-summary'>
        <h1>About</h1>
        <p>Super Genius</p>
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