import React,{useState} from 'react';

import '../App.css';

import MovieCard from './MovieCard'


const MovieList = ({movies, name , search}) => {

   const mov = movies.filter( el=> (
        el.name.toLowerCase().includes(name.toLowerCase().trim()) &&
        el.rate >= search
       )




).map(film=>( <MovieCard film={film} key={film.id} /> )  )


    return (
        < >
       
        {    
       mov
        }
     
      
  
  
                                                    
    
          
        </>
    );
}

export default MovieList;