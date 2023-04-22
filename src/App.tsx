import React from 'react';
import Text from './components/Text';
import Button from './components/Button';

function App(): JSX.Element {
  return (
    <div className="App">
      <Text variant="body1" color="">
        Questo è un testo
      </Text>
      <Button text="Questo è un bottone" />
    </div>
  );
}

export default App;
