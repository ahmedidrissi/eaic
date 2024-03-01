import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/ai_day_1.jfif";
import img2 from "../../assets/ai_day_2.jfif";
import img3 from "../../assets/ai_day_3.jfif";
import img4 from "../../assets/data_competition_2024.png";

const imgList = [img1, img2, img3, img4];

function Events() {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Our Events</h2>
      <div className="container p-3 d-flex justify-content-center">
        <div
          className="carousel py-3"
          id="events"
          style={{ maxWidth: "600px" }}
        >
          <Carousel
            showThumbs={false}
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={true}
            showStatus={false}
            swipeable={true}
            width={"100%"}
          >
            {imgList.map((img, index) => (
              <div key={index}>
                <img src={img} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
