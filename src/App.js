//We begin on port 3000.
import React,{useEffect, useState} from 'react'; 
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'b94e9bb3';
  const APP_KEY = '550543cb72809cae78bbd3cedf40b168';

 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState('');
 const [query, setQuery] = useState("chicken");


//Not running API call on each key press as it will flood API requiests
useEffect( () =>{
  getRecipes();
}, [query]);

const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();

  setRecipes(data.hits);
  console.log(data.hits);
}

//Updates search with the events target, which is the text field.
const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  //stops the default of refreshing the page
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


return(
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">
        search
        </button> 
    </form>
    {recipes.map(recipe => (
      //We use recipe.recipe because the array is the same name as our var.
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}/>
    ))};
  </div>
  );
};

export default App;


//<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
