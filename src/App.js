import './App.css';
import CountryContainer from './containers/CountryContainer';
import VisitedCountryContainer from './containers/VisitedCountryContainer';

function App() {
  return (
    <div className="App">
        <div>
          <CountryContainer/>
      </div>
      <div className="visitedCountry">
        <VisitedCountryContainer/>
      </div>
    </div>
  );
}

export default App;
