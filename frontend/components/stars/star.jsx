import React from 'react';


const Range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, onChange, value }) => (
    <label className={`rating-item ${colored ? 'rating-item-selected' : ''}`}>
        <input
            checked={checked}
            className='rating-input'
            onChange={(e) => {
                onChange(value)
            }}
            type="radio"
            value={value} 
            id='review-rating'/>
    </label>)

export const Rating = ({ min, max, onChange, value, disabled }) => {
    if (disabled && document.getElementById("review-rating")) {
        const rating = document.getElementById("review-rating")
        rating.setAttribute('disabled', true)
        rating.classList.toggle('noHover')
    }
    return (
        <div className='rating' >
            {Range(min, max).map(item => (
                <RatingItem key={item}
                    colored={value >= item}
                    checked={value === item}
                    value={item} onChange={onChange} />
            ))
            }
        </div>
    )
}