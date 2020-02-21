import React from 'react';



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
                />
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
        className={`rating-indiv-item ${colored ? 'rating-item-selected-t' : ''}`} >
        <input
            checked={checked}
            className='rating-input'
            type="radio"
            value={value}
            readOnly
            />
    </label>
)

export const IndivRating = ({min, max, value}) => {
    return (
        <div className='rating-y' >
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