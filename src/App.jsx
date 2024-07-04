import React from 'react';
import ButtonWithIcon from './components/ButtonWithIcon';

const App = () => {
  return (
    <div className="p-4">
      <ButtonWithIcon
        iconName="camera"
        onClick={() => console.log('clicked')}
        size="large"
        design="primary"
        position="right"
      >
        Dark Mode
      </ButtonWithIcon>
    </div>
  );
};

export default App;
