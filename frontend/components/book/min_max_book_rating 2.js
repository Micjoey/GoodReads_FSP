import React from 'react';



function MinMaxBookRatings(allBooks) {
    const indivRatings = {}
    // indivRatings['All Ratings'] = true;
    allBooks.map(indivBook => {
        indivRatings[Math.floor(indivBook.average_rating)] = true
    })
    
    return Object.keys(indivRatings)
    
}

export default MinMaxBookRatings

