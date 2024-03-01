import './App.css';
import { GridBackgroundDemo } from './components/GridBackground';
import Usage from './components/usage'; // Corrected import statement for the Usage component

function App() {
  return (
    <>
      <GridBackgroundDemo />
      <Usage /> {/* Using the Usage component */}
    </>
  );
}

export default App;
