import './App.css';
import { Biografia,Landing, Linguaggi, Navbar ,Portfolio,Contact} from './screens';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Biografia />
      <Linguaggi /> 
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
