import React from 'react'

const Spinner = () => {
    return (
        <div className="col-12 d-flex justify-content-center mt-5">
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;