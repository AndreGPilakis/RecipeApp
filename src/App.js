import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'b94e9bb3';
  const APP_KEY = '550543cb72809cae78bbd3cedf40b168';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


return(
<div className="App">
  <h1>Hello react</h1>
</div>
);
};

export default App;
