import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function StandardCarousel({ data }) {
  return (
    <Carousel autoPlay="true" interval="1000" infiniteLoop="true">
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.imageAlt} />
        </div>
      ))}
    </Carousel>
  );
}

export default StandardCarousel;
