import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./Carousel.module.scss"
interface CarouselProps {
    images: string[];
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 0 },
        items: 1,
    },
    //   desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 1,
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 1,
    //   },
    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //   },
};

const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
    return (
        <Carousel responsive={responsive} className={Styles.Carousel}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{ width: "100%" }} />
                </div>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;
