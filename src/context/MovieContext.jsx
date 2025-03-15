import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    // get favourites from local storage
    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites')

        // if there are favourites in local storage, set them in state by adding to the array
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites))
        }
    }, [])

    // save favourites to local storage
    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addFavourite = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFavourite = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id != movieId))
    }

    // check if a movie is in favourites
    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}