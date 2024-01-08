
import './App.css';
import Homepage from './components/Homepage';
import Business from './components/Business';
import About from './components/About';
import Roadmap from './components/Roadmap';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <div className="">
      {/* <Homepage/> */}
      <Business />
      <About />
      <Roadmap />
   <FaqSection/>
    </div>
  );
}

export default App;
