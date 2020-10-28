import './App.css';
import PassingGrid from './PassingGrid';
import FailingGrid from './FailingGrid';

function App() {
  return (
    <>
      <h1>Grid that passes test</h1>
      <PassingGrid />
      <h1>Grid that fails test</h1>
      <FailingGrid />
    </>
  );
}

export default App;
