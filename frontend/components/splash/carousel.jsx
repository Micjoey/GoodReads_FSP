import React from 'react'
ReactDOM.render(
    <Carousel />,
    document.getElementById('carousel-container')
)

class Carousel extends React.Component {
    render () {
        return (
            <div classname="carousel"></div>
        )
    }
}