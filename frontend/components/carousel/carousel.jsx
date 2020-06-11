import React, { Component } from 'react'


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            index: 0,
            carouselImages: this.props.images,
        }
        this.increaseSlide = this.increaseSlide.bind(this)
        this.decreaseSlide = this.decreaseSlide.bind(this)
        this.direction = this.direction.bind(this)
        this.showSlides = this.showSlides.bind(this)
        this.allImages = this.allImages.bind(this)
    }

    allImages() {
        let replica = this.state.carouselImages.slice()
        return replica
    }
    
    direction(n) {
        let slides = document.getElementsByClassName("mySlides");
        if (n < 1) {
            this.decreaseSlide(slides)
        } else {
            this.increaseSlide(slides)
        }
    }

    increaseSlide(slides) {
        if (this.state.index === slides.length - 1) {
            this.state.index = 0
        } else {
            this.state.index += 1
        }
        this.showSlides()
    }

    decreaseSlide(slides) {
        
        if (this.state.index === 0) {
            this.state.index = slides.length - 1
        } else {
            this.state.index -= 1
        }
        this.showSlides()
    }



    showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        let currentIndex = this.state.index
        let i; 
        for (i = 0; i < slides.length; i++) {
            if (i === currentIndex) {
                slides[i].style.display = "block";
            } else {
                slides[i].style.display = "none"
            }
        }
        if (!!n) {
            this.state.index = n;
        } else {
            n = this.state.index
        }
        for (let i = 0; i < dots.length; i++) {
            if (i === n) {
                dots[i].className += " active";
            } else {
                dots[i].className = dots[i].className.replace(" active", "");
                dots[i].className = dots[i].className.replace(" dot-first-child", "");
            }
        }
        
        
    }



    render () {
        return (
            <div className="slideshow-container" id="carousel-container">
                <div className="carousel-container">
                    <a className="prev" onClick={() => this.direction(-1)}>&#10094;</a>
                    <div className="carousel">
                        {/* Full-width images with number and caption text */}
                        {this.allImages().map((info, idx) => (
                            <div className="mySlides fade" key={idx}>
                                {/* <div className="numbertext"> {idx + 1}</div> */}
                                <div className="text">{info[1]}</div>
                                <img src={info[0]} alt="" width="100%" />
                            </div>
                        ))}
                    </div>
                    <a className="next" onClick={() => this.direction(1)}>&#10095;</a>
                </div>
                <div className="dots-container">
                    {this.allImages().map((info, idx) => (
                        <span key={idx+1} className="dot dot-first-child" onClick={() => this.showSlides(idx)}></span>
                    ))}
                </div>
            </div>
        )
    }

}

export default Carousel