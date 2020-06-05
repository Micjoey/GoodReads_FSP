import React, { Component } from 'react'


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            index: 0,
            carouselImages: [images.linkedin, images.github, images.wild_game],
        }
        this.increaseSlide = this.increaseSlide.bind(this)
        this.decreaseSlide = this.decreaseSlide.bind(this)
        this.direction = this.direction.bind(this)
        this.currentSlide = this.currentSlide.bind(this)
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
        this.showSlides(slides)
    }

    decreaseSlide(slides) {
        
        if (this.state.index === 0) {
            this.state.index = slides.length - 1
        } else {
            this.state.index -= 1
        }
        this.showSlides(slides)
    }

    currentSlide(n) {
        this.setState({index: n})
    }

    showSlides(slides) {
        let currentIndex = this.state.index
        let dots = document.getElementsByClassName("dot");
        let i; 
        console.log(currentIndex)       
        for (i = 0; i < slides.length; i++) {
            if (i === currentIndex) {
                slides[i].style.display = "block";
            } else {
                slides[i].style.display = "none"
            }
        }

        // <------- dot logic --------->
        // for (i = 0; i < dots.length; i++) {
        //     if (i === currentIndex) {
        //         dots[i].className += "active";
        //     } else {
        //         dots[i].className = dots[i].className.replace(" active", "");
        //     }
        // }
        // <------- dot logic --------->
        
    }



    render () {
        return (
            <div className="slideshow-container" id="carousel-container">
                <div className="carousel">
                    {/* Full-width images with number and caption text */}
                    {this.allImages().map((img, idx) => (
                        <div className="mySlides fade" key={idx}>
                            <div className="numbertext"> {idx + 1}</div>
                            <img src={img} alt="" width="100%" />
                            <div className="text">Caption Text</div>
                        </div>
                    ))}
                {/* <div className="mySlides fade">
                        <div className="numbertext"> 1 / 3</div>
                        <img src={images.linkedin} alt="" width="100%" display="block"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext"> 2 / 3</div>
                        <img src={images.github} alt="" width="100%"/>
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext"> 3 / 3</div>
                        <img src={images.wild_game} alt="" width="100%"/>
                        <div className="text">Caption Text</div>
                    </div> */}
                    <a className="prev" onClick={() => this.direction(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.direction(1)}>&#10095;</a>
                </div>
                {/* dot logic */}
                {/* <div>
                    <span className="dot" onClick={() => currentSlide(1)}></span>
                    <span className="dot" onClick={() => currentSlide(2)}></span>
                    <span className="dot" onClick={() => currentSlide(3)}></span>
                </div> */}
                {/* dot logic */}
            </div>
        )
    }

}

export default Carousel