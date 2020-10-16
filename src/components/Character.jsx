import React from 'react'

const Character = ({ character }) => {
    return (
        <div className="col my-2">
            <div className="card" style={{ width: "17rem" }}>
                <img src={character.image} className="card-img-top" alt={character.name} />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">
                        <p className="d-flex"><span className="badge badge-success mr-1">Status:</span>{character.status}</p>
                        <p className="d-flex"><span className="badge badge-warning mr-1">Species:</span>{character.species}</p>
                        <p className="d-flex"><span className="badge badge-info mr-1">Gender:</span>{character.gender}</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Character;