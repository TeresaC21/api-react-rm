import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import ListCharacters from "./ListCharacters";
import HeaderCharacters from "./HeaderCharacters";
import Spinner from "./Spinner";
import SearchForm from './SearchForm';


const CharactersContainer = () => {
    /*************** States ***************/
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState(1);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [filterName, setFilterName] = useState('');

    /*************** Functions ***************/
    const url = 'https://rickandmortyapi.com/api/character';
    const fetchCharacters = async () => {
        setIsLoading(true);
        const response = await axios.get(`${url}?page=${pagination}&name=${filterName}`);
        setCharacters(response.data.results);
        setTotalCharacters(response.data.info.count);
        setIsLoading(false);
    }

    const nextPage = () => {
        if (totalCharacters > 20) {
            setPagination(pagination + 1);
        }
    }

    const prevoiousPage = () => {
        if (pagination > 1) {
            setPagination(pagination - 1);
        }
    }

    const handleSubmitSearchCharacter = (e) => {
        e.preventDefault();
        setPagination(1);
        fetchCharacters();
    }

    const handleChange = (e) => {
        setFilterName(e.target.value);
    }

    /*************** Lifecycle ***************/
    useEffect(() => {
        fetchCharacters();
    }, [pagination])

    return (
        <div className="container py-4">
            <HeaderCharacters />
            <SearchForm handleSubmitSearchCharacter={handleSubmitSearchCharacter} handleChange={handleChange} />
            {isLoading
                ? <Spinner />
                : <ListCharacters
                    characters={characters}
                    nextPage={nextPage}
                    prevoiousPage={prevoiousPage}
                />
            }
        </div>
    );
}

export default CharactersContainer;