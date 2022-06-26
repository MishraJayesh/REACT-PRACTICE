import React from 'react';
import {Carousel} from 'react-bootstrap';

function ControlledCarousel() {
         return(
            <Carousel fade={true}>
                <Carousel.Item>
                    <img 
                        className = "d-block w-100"
                        src = "https://img.theweek.in/content/dam/week/news/sci-tech/images/2022/4/5/macaw-bird.jpg"
                        alt = "First Slide"
                        height="300px"
                        width="100px"
                    />
                <Carousel.Caption>
                    <h3>Macaw</h3>
                </Carousel.Caption>    
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className = "d-block w-100"
                        src = "https://www.greatfen.org.uk/sites/default/files/styles/grid_teaser/public/third_light/Red%2520Kite.jpg?h=5f29f7b4&itok=vs_8-mcE"
                        alt = "Second Slide"
                        height="300px"
                        width="100px"
                    />
                <Carousel.Caption>
                    <h3>Kite</h3>
                </Carousel.Caption>    
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className = "d-block w-100"
                        src = "https://i.gadgets360cdn.com/large/kingfisher_pixabay_1482398008037.jpg"
                        alt = "Third Slide"
                        height="300px"
                        width="100px"
                    />
                <Carousel.Caption>
                    <h3>Kingfisher</h3>
                </Carousel.Caption>    
                </Carousel.Item>

            </Carousel>

         );
}

export default ControlledCarousel;