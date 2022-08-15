import './App.css';
import Main from'./Main.js';
import Navbar from './Navigation/Navbar.js';
import Contact from './Contact/Contact.js';
import useScrollToTop from './ScrollToTop';

function App() {
  useScrollToTop();
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
