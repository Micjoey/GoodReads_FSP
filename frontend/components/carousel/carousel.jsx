import React, { Component } from 'react'


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            index: 0,
            carouselImages: this.props.carouselImages,
        }
        this.plusSlides = this.plusSlides.bind(this)
        this.currentSlide = this.currentSlide.bind(this)
        this.showSlides = this.showSlides.bind(this)
        
    }

    plusSlides(n) {
        let currentIdx = this.state.index
        currentIdx += n
        this.setState({index: currentIdx})
    }

    currentSlide(n) {
        this.setState({index: n})
    }

    showSlides(n) {
        let i;
        let slideIndex = this.state.index;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) this.setState({index: 0});
        if (n < 1) this.setState({index: slides.length - 1})
        for (i = o; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
    }


    render () {
        return (
            <div className="slideshow-container">
                <div>
                    {/* Full-width images with number and caption text */}
                    <div className="mySlides fade">
                        <div className="numbertext"> 1 / 3</div>
                        <img src="" alt="" width="100%"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext"> 2 / 3</div>
                        <img src="" alt="" width="100%"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext"> 3 / 3</div>
                        <img src="" alt="" width="100%"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(-1)}>&#10095;</a>
                </div>
                <div>
                    <span className="dot" onClick="currentSlide(1)"></span>
                    <span className="dot" onClick="currentSlide(2)"></span>
                    <span className="dot" onClick="currentSlide(3)"></span>
                </div>
            </div>
        )
    }

}

export default Carousel