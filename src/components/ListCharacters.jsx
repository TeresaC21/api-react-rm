import React from 'react'

// Components
import Character from "./Character";
import PaginationListCharacters from "./PaginationListCharacters";


const ListCharacters = ({ characters, nextPage, prevoiousPage }) => {
    return (
        <>
            <div className="row row-cols-4 mt-5">
                {characters.map(character => {
                    return (
                        <Character key={character.id} character={character} />
                    )
                })}
            </div>
            <div className="row justify-content-center">
                <PaginationListCharacters nextPage={nextPage} prevoiousPage={prevoiousPage} />
            </div>
        </>
    );
}

export default ListCharacters;