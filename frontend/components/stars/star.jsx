import React from 'react';
import { editReview } from '../../actions/review_actions';


const Range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, onChange, value }) => (
    <label 
        className={`rating-item ${colored ? 'rating-item-selected' : ''}`} >
            <input
                checked={checked}
                className='rating-input'
                onChange={(e) => {
                    onChange(value)
                }}
                type="radio"
                value={value} 
                id='review-rating'/>
    </label>
)

export const Rating = ({ min, max, onChange, value }) => {

    return (
        <div className='rating' >
            {Range(min, max).map(item => (
                <RatingItem key={item}
                    colored={value >= item}
                    checked={value === item}
                    value={item} 
                    onChange={onChange} />
            ))
            }
        </div>
    )
}

// ---------------------- Show Book All Ratings --------------

const IndivRange = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const IndivRatingItem = ({ checked, colored, value }) => (
    <label
        className={`rating-item ${colored ? 'rating-item-selected' : ''}`} >
        <input
            checked={checked}
            className='rating-input'
            // onChange={(e) => {
            //     onChange(value)
            // }}
            type="radio"
            value={value}
            id='review-rating' />
    </label>
)

export const IndivRating = ({min, max, value}) => {
    if (document.getElementById("review-rating")) {
        const allReviews = document.getElementsByClassName("rating-item-selected")
        // debugger
    }
    return (
        <div className='rating' >
            {IndivRange(min, max).map(item => (
                <IndivRatingItem key={item}
                    colored={value >= item}
                    checked={value === item}
                    value={item} 
/>
            ))
            }
        </div>
    )
}