import React from 'react'

const SearchForm = ({ handleSubmitSearchCharacter, handleChange }) => {
    return (
        <form onSubmit={handleSubmitSearchCharacter}>
            <div className="form-group">
                <label>Search Character</label>
                <input onChange={handleChange} type="text" className="form-control" />
            </div>
        </form>
    );
}

export default SearchForm;