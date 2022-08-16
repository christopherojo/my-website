import './Project.css'
import PasswordGeneratorBackground from '../Images/PasswordGeneratorHome.jpg'

const Header = () => {
  return (
    <div className='project-header' style={{backgroundImage: `url(${PasswordGeneratorBackground})`}}>
      <div id='passwordgenerator-title'className='project-header-title'>
        <h1>Password Generator</h1>
        <a href='https://shaleequreshi.github.io/Password-Generator/' target='_blank'>
          <h3>Test it Yourself!</h3>
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
          <p>Password Generator is a simple website that creates secure passwords at the click of a button.</p>
        </div>
        <div className='project-tools'>
          <h1>Technologies used</h1>
          <div className='project-tools-spread'>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>Node.js</p>
          </div>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>This project was inspired by the recommended beginner projects in the Hack Western 7 start kit document. Our original plan was to just code an encryptor/decryptor that shifts the letters of whatever the user enters down the alphabet by 4 letters. For example, A would become E, B would become F, C would become G, and so on. All it would need to be decrypted is to work backward. After getting the idea of encrypting we thought about passwords, and how we can "encrypt" the user's information by creating a strong password for the user. From that point on we started working on how we can best create secure passwords for the user to use for their accounts significantly lowering the chance the account has to get hacked.</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>The password generator is exactly like its name says. It generates a complex but secure password for the user to use for any account. It has options to make it customizable but it is recommended to be used with a length of 16 characters including lower case letters, upper case letters, special characters, and numbers.</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>There were 3 steps to building the password generator. The first step was writing the javascript code. The javascript code is what actually generates the password. It contains the 3 functions that build the password. One of the functions randomly generates a character, number, or a special character. Another function calls the previous function in order to build characters into a password that does not contain any back to back duplicate characters. The last function checks if the password follows all instructions that the user has set. In order to use javascript, we had to create a website. The second step was writing Html code to run the javascript on the website. In this step, we built buttons that accept the user input and allowed the user to generate a password just by clicking. We also added a copy button for the user's convenience. The third and final step of the password generator was designing a pleasing user interface. Here we created the background image and set colours for all of the buttons. We formatted how everything would look so that a user would not experience any difficulty trying to use our website.</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>We ran into a few challenges while trying to create a website. The first challenge was coding in javascript. No one knew how to code javascript that well so we had to watch a crash course on javascript in order to learn the language and code with it. Luckily we were experienced in other programming languages so the transfer to javascript in a short period of time was difficult, but not impossible. The next challenge was arranging the buttons onto the middle of the page in a way that scales with different shapes of monitors. This was done using bootstrap which allowed us to create buttons that scale with the size of the page. The last challenge that we faced was making the background fit the full size of the monitor. This was figured out through a lot of research and attempts in order to develop a code that allows the image to fit properly.</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>Overall, we are proud that we participated in and completed our project for Hack Western 7. This was our team's first hackathon and we are proud of our work. We are proud of how we worked together to create this hack that is beneficial to people and can be used as a part of our daily lives.</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>Since it was our first hackathon we have learned so much from it. We have learned how to code in javascript and Html. We learned how to design a visually pleasing user interface. We learned how to use node.js, css, and bootstrap. We learned how to collaborate and work together as a group. We learned how to come up with ideas and act on them. We learned how to have fun with coding in such a short time period. Overall, Hack Western 7 has been a great learning experience for all of us.</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <p>We are going to be working on making it more mobile-friendly. That way more users can use the web application and create secure passwords. We are also working towards adding more options to the password generator to make it feel more customizable while keeping it secure. More importantly, we are working towards creating a line of text that helps the user memorize their password. We are also planning on adding a feature that stores the password if the user has the website still in their history. In addition to that, we are working on allowing the user to the password and its memorizing text in order to have it stored on the user's computer instead of their website so that they can store it in a safer place in terms of cybersecurity.</p>
          <a href='https://devpost.com/software/password-generator-ducvyz' target='_blank'>
            <p>Taken from Devpost</p>
          </a>
        </div>
      </div>
    </div>
  );
}

const PasswordGenerator = () => {
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

export default PasswordGenerator;