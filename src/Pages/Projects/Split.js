import './Project.css'
import SplitBackground from '../Images/SplitFigmaMap.jpg';

const Header = () => {
  return (
    <div className='project-header' style={{backgroundImage: `url(${SplitBackground})`}}>
      <div id='split-title'className='project-header-title'>
        <h1>Split</h1>
        <a href='https://github.com/ChristopherOjo/Split' target='_blank'>
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
          <p>Split is an app that can help lower the costs of subscription fees by sharing it with your friends!</p>
        </div>
        <div className='project-tools'>
          <h1>Technologies used</h1>
          <div className='project-tools-spread'>
            <p>Java</p>
            <p>Android Studio</p>
            <p>Courier</p>
            <p>Figma</p>
          </div>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>Due to COVID-19, with nothing else to do, people are using subscription services more frequently. Some of these services are too expensive to pay for each month, so we decided to create this app to allow people to share the costs of these services to make these prices more affordable.</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>Our app allows users to create a plan for a service of their choosing. Other users can then join their plan to use the same service and pay a part of the cost. The app also sends email notifications whenever a user leaves or joins someone's plan.</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>We used figma to get an idea of how the app would look, then used Android Studio and Java to create the app. Using Courier, we also added the feature for the app to notify the user when people join or leave their plans.</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>Since each of us had to work with new services and APIs, we found it challenging to adapt to these unfamiliar technologies and and learn how to use them as we did our project.</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>We are proud of our ability to put together a functioning app in a short amount of time. Learning how to use SQL, Android Studio, and Courier was a very rewarding process and one that we are proud to have accomplished.</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>We learned how to use SQL, Android Studio, and Courier, as well as became more familiar with Java.</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <p>Include an option to add a Paypal account to your profile, use a cloud database to store the users' information.</p>
          <a href='https://devpost.com/software/split-nlrmib' target='_blank'>
            <p>Taken from Devpost</p>
          </a>
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