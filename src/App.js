import React,{useEffect, useState} from "react";
import Recipe from './recipe';
import './App.css';

const App = () => {
     
    const APP_ID = "32731bfc";
    const APP_KEY = "577340153046fcfdfbbf7a091462cc90";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] =useState("");
    const[query, setQuery] =useState('noodles');

    useEffect( () =>
    {
      getRecipes();
    }, [query]);
       
      const getRecipes = async () =>
      {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
      };

     const updateSearch = e =>{
     setSearch(e.target.value);

     };
     
     const getSearch = e =>{
       e.preventDefault();
       setQuery(search);
        setSearch("");
     };


  return (
       <div>
         <h1 className="heading">Food Recipe</h1>
         <form onSubmit={getSearch} className="search-form">
           <input onChange={updateSearch} className="search-bar"  value={search}  type="text" />
           <button className="search-button" type="text">Search</button>
         </form>
         <div className="recipes"> 
         {recipes.map(recipe =>
          (
            <Recipe 
            key ={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
          )) }
       </div>
       <p className="footer">Created By Bhavika Malhotra</p>
</div>

  );
};

export default App;
