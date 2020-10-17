import React from 'react';
import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      <Hello color="blue" />
      <Hello name="인상민" color="red" />
    </Wrapper>
  );
}

export default App;
