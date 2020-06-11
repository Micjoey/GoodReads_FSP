import React from 'react';


function LoadingScreen() {
    return (
        <div className="loading-page">
            <div className="loading-sections">
                <div className='loading-circle'>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                </div>
                <div className='loading-text'>
                    <h1>Loading...If longer than 1 min, please refresh the page.</h1>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen

