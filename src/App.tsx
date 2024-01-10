import './App.css';
import StreetLight from './StreetLight.tsx';

function App() {

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <StreetLight initState={'STOP'} times={{
        'STOP':    10 * 1000,
        'PREPARE': 2 * 1000,
        'GO':      10 * 1000,
        'WARNING': 4 * 1000,
      }} />
      <StreetLight initState={'GO'} times={{
        'STOP':    6 * 1000,
        'PREPARE': 2 * 1000,
        'GO':      6 * 1000,
        'WARNING': 1 * 1000,
      }}/>
      <StreetLight initState={'PREPARE'} times={{
        'STOP':    4 * 1000,
        'PREPARE': 1 * 1000,
        'GO':      3 * 1000,
        'WARNING': 1 * 1000,
      }}/>
    </div>
  );
}

export default App;
