import React from "react";
import { Link } from "react-router-dom";
import loading from "./../../img/loading.png"
import slidesData from "../../data/slides.js";
// let slides = slidesData.slides;
// const slides = require("./../data/slides").slides;
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            slides: [],
            loading: false,
            message: "",
            summary:
                "However, speaking on behalf of his father, director Kroenke rejected claims Arsenal desperately needed to restructure in order to achieve long-term success, and said the club already had 'developed a modern infrastructure' following Arsene Wenger's departure.",
        };
    }
    componentDidMount() {
        this.setState({
            slides: slidesData
        })
    }
    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        const slidesLength = this.state.slides.length;
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === slidesLength - 1
                ? 0
                : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const slidesLength = this.state.slides.length;
        const nextIndex =
            this.state.activeIndex === 0
                ? slidesLength - 1
                : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;
        const currentSlides = this.state.slides.filter(
            (slides, index) => index !== activeIndex
        );

        const slides = this.state.slides.map((slide, index) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={index}
                >
                    <Link to={`/hahah`}>
                        <div className="news-image">
                            <img src={slide.img} alt="title" />
                        </div>
                        <CarouselCaption
                            captionHeader={slide.summary}
                            captionText={slide.title}
                        />
                    </Link>
                </CarouselItem>
            );
        });

        return (
            <div className="carousel-wrapper container-row">
                {this.state.loading ? (
                    <div className="container">
                        <img className="loading" src={loading} alt="Loading gif" />
                    </div>
                ) : (
                        <>
                            <div className="carousel">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={this.next}
                                    previous={this.previous}
                                >
                                    <CarouselIndicators
                                        items={this.state.slides}
                                        activeIndex={activeIndex}
                                        onClickHandler={this.goToIndex}
                                    />
                                    {slides}
                                    <div className="controllers">
                                        <div className="wrapper">
                                            <CarouselControl
                                                direction="prev"
                                                directionText="Previous"
                                                onClickHandler={this.previous}
                                            />
                                            <CarouselControl
                                                direction="next"
                                                directionText="Next"
                                                onClickHandler={this.next}
                                            />
                                        </div>
                                    </div>
                                </Carousel>

                            </div>
                        </>
                    )}
            </div>
        );
    }
}

export default Slider;