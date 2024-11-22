
import './App.css';
import FeatureFlags from './components/feature flag';
import FeatureFlagGlobalState from './components/feature flag/context';
import Tictactoe from './components/Tictactoe';

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
