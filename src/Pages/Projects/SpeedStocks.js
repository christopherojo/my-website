import SpeedStocksBackground from '../Images/SpeedStocksGameConcept.jpg';

const Header = () => {
  return (
    <div className='project-header' style={{backgroundImage: `url(${SpeedStocksBackground})`}}>
      <div id='speedstocks-title'className='project-header-title'>
        <h1>Speed Stocks</h1>
        <a href='https://github.com/ChristopherOjo/Investing-Game' target='_blank'>
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
          <p>Speed Stocks is an educational game meant to teach people how to recognize simple stock market trends and introduce them to the world of investing.</p>
        </div>
        <div className='project-tools'>
          <h1>Technologies used</h1>
          <div className='project-tools-spread'>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>GitHub</p>
            <p>Github Pages</p>
          </div>
        </div>
        <div className='project-inspiration'>
          <h1>Inspiration</h1>
          <p>Our inspiration for this was the recent short squeeze event from 3 weeks ago on Wall Street which bankrupted many hedge funds and grabbed a lot of media attention.</p>
        </div>
        <div className='project-what'>
          <h1>What it does</h1>
          <p>Our program draws lines from one price to the next price and keeps updating it until the PiggyBank is at zero, simulating a real stock chart, but in the form of a game.</p>
        </div>
        <div className='project-how'>
          <h1>How we built it</h1>
          <p>Firstly we focused on getting the core mechanics right, like drawing a line between two points and generating random numbers. Then we made it so it would generate more connected lines and set the random values to be actual values that could appear on a real stock chart.</p>
        </div>
        <div className='project-challenges'>
          <h1>Challenges we ran into</h1>
          <p>At first, we tried to make the window shift from right to left over time, but we changed it so that it would just update the chart whenever the “space bar” was pressed. We had many difficulties with the formatting of the page, as we could not get the images and game to work well with different monitor sizes.</p>
        </div>
        <div className='project-accomplishments'>
          <h1>Accomplishments</h1>
          <p>First of all that we finished on time and delivered a functional project which we are all proud of, secondly that even though some of us didn’t know how to code in JavaScript, we still proved useful. Last but not least, we all learned something new or polished a skill which made these days of work worth it, not to mention that we met new people and had fun.</p>
        </div>
        <div className='project-learn'>
          <h1>What we learned</h1>
          <p>How to build web applications using JavaScript, HTML, and CSS. In addition to this we also learned how to host websites.</p>
        </div>
        <div className='project-next'>
          <h1>What's next</h1>
          <p>What's next for Speed Stocks is making it look more visually appealing. We can add more points so that it looks more similar to a stock price chart. We could add trend lines to give more details about where the price is going for the user. We can also add different difficulty settings to make the game more easier or challenging for the user. We can add a score tracker and a play again button.</p>
          <a href='https://devpost.com/software/speed-stocks' target='_blank'>
            <p>Taken from Devpost</p>
          </a>
        </div>
      </div>
    </div>
  );
}

const SpeedStocks = () => {
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

export default SpeedStocks;