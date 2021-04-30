import {useState} from 'react'
import './App.css';

import AddMovie from './AddMovie/AddMovie'
import MovieList from './Comp/MovieList'
import {MovieData} from './Comp/MovieData'
import NavBar from './NavBar/NavBar'
import MovieInfo from './Info/MovieInfo'

import { BrowserRouter as Router , Route} from "react-router-dom";

function App() {

  const [movies , setMovies] = useState(MovieData)
const [name , setName] = useState('')
const [search , setSearch ] = useState('')



// const addmv =(newmovie)=> {
//   return setMovies([...movies, newmovie])
// }



  return (
    <div className="App">
  <Router>
        <Route exact path='/' render={()=> <NavBar setName={setName} setSearch={setSearch} search={search}/>   } />
        <Route exact path='/' render={()=> <MovieList movies={movies} name={name} search={search} />  } />
        <Route exact path='/' render={()=> <AddMovie  movies={movies} setMovies={setMovies} />  } />

        
              
   

     <Route path='/MovieInfo/:id' render={()=><MovieInfo movies={movies} setMovies={setMovies} />}/>
  </Router>
  
     
   
    </div>
  );
}

export default App;
