import './Project.css'
import YouFirstBackground from '../Images/YouFirstMeditate.jpg'

const Header = () => {
  return (
    <div className='project-header' style={{backgroundImage: `url(${YouFirstBackground})`}}>
      <div id='youfirst-title'className='project-header-title'>
        <h1>You First</h1>
        <a href='https://github.com/ChristopherOjo/MentalHealthApp' target='_blank'>
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
          <p>You First is a mental health app that helps you destress and gets you in touch with people who care.</p>
        </div>
        <div className='project-tools'>
          <h1>Technologies used</h1>
          <div className='project-tools-spread'>
            <p>Java</p>
            <p>Kotlin</p>
            <p>Firebase</p>
            <p>Dart</p>
            <p>Android Studio</p>
          </div>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>In these unprecedented times, with the coronavirus and everything being online, remote, and under lockdown, people have been dealing with may more stress and pressure recently, be it because of personal, financial, or housing problems.</p>
          <p>This has taken a toll on the mental health of people of all ages, who often don’t know how to seek help and process these huge changes which have taken place in their lives in the last few months</p>
          <p>You first is an app that attempts to give people free personal and professional help to deal with stress and ways to improve their mental health with lots of different options.</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>It is an app with a very simple user interface that has options to meditate, look at positive quotes, and wholesome memes at the touch of a button. We have also incorporated the option to call the suicide hotline number in case the user is feeling distressed and needs professional help from a human. We also have daily built-in notifications that remind the user to keep themselves hydrated by drinking water and a positive quote every morning to look at and feel good</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>We thought about how we destress and what we turn to when we are panicking the most as a student. We also did a lot of research online to how others say they deal with stress best. Combining the best ideas we could find, we built You First.</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>Nobody in our group knew how to develop android applications before this hackathon. It was a big challenge to learn how Java, Firebase, Kotlin, and Flutter works. As we continued to work on the app, we realized that Kotlin and Flutter were not necessary to use for our app and focused on Java and Firebase in order to decrease the difficulty.</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>We are very proud of learning Kotlin, Java, Flutter, and Firebase using Android Studio this hackathon, and coming up with a hack that is visually pleasing and applicable in our daily lives. Our app is more relevant now than ever before because of the quarantine and lockdown restrictions we must follow to keep us and our loved ones safe.</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>Everyone learned the basics of Kotlin and Firebase to navigate around Android Studio. We learned how to use google firebase in sending notifications and storing data such as images and audio files. Encompassed more TEAMWORK!!! We efficiently spread out the tasks to complete our tasks all the while helping each other for everyone to know all the material going into the application. Certain individuals also learned flutter in the beginning as we thought it would have been a better way to develop native cross-platform apps</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <p>What would be next for 'You First' would be an updated UX/UI design, and more features.</p>
          <a href='https://devpost.com/software/you-first-one-stop-destination-for-everything-mental-health' target='_blank'>
            <p>Taken from Devpost</p>
          </a>
        </div>
      </div>
    </div>
  );
}

const YouFirst = () => {
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

export default YouFirst;