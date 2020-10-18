import React from 'react';

const Episodes = ({ characters }) => {
    return (
        <>
            <h1>Filer Episodes Characters</h1>
            <div className="row row-cols-4 mt-5">
                {characters.map(character => {
                    return (
                        /*   <Character key={character.id} character={character} /> */
                        <div className="col my-2">
                            <div className="card" style={{ width: "17rem" }}>
                                <img src={character.image} className="card-img-top" alt={character.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">
                                        <p className="d-flex"><span className="badge badge-success mr-1">Episode:</span>{character.episode}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Episodes;
