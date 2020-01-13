//We begin on port 3000.
import React,{useEffect, useState} from 'react'; 
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'b94e9bb3';
  const APP_KEY = '550543cb72809cae78bbd3cedf40b168';

  const [recipes, setRecipes] = useState([]);

useEffect( () =>{
  getRecipes();
}, []);

const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();

  setRecipes(data.hits);
}

return(
  <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        search
        </button> 
    </form>
    
  </div>
  );
};

export default App;


//<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
