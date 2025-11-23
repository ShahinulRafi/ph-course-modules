import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div className="my-24">
      <div className="text-center">
        <h3 className="text-3xl text-center font-bold my-8">Review</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          obcaecati magnam expedita laboriosam impedit explicabo ut possimus
          accusantium illum iste ab esse dolorum, vel velit earum nisi
          reiciendis tenetur corrupti!
        </p>
      </div>

      <Swiper
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
