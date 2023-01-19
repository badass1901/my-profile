import React from "react";
import "./Review.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const reviewData = [
    {
      avatar: require("../../assets/avatar1.jpg"),
      name: "Alessandro M",
      review: `Shaswhat is a young developer with limited skills, but with a strong desie to improve and tackle new challenges. In the past month we have been working together and I had the opportunity to grow his skills, and within that month he was able to learn new skills to create a simple web-app from scratch and deliver it to me. Communication in English is good, even if it is worth noting that Shashwat is shy on admitting he did not understand something and you will need to pull it out from him.`,
    },
    {
      avatar: require("../../assets/avatar2.jpg"),
      name: "John prescott",
      review: `It was such a pleasure to work with Shashwat. He was always accommodating, kind, and motivated. We worked on some projects together, and he is very applied and aims for high-quality work.
      He is creative, smart, has excellent communication skills, and is willing to help when you need it. He is the kind of person who does anything for the group’s benefit.`,
    },
  ];

  return (
    <section id="review">
      <h5 data-aos="fade-up" data-aos-anchor="#review" data-aos-duration="700">
        Feedback from colleagues and clients
      </h5>
      <h2 data-aos="fade-up" data-aos-anchor="#review" data-aos-duration="900">
        Reviews
      </h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container reviews__container"
        data-aos="fade-up"
        data-aos-anchor="#review"
        data-aos-duration="1800"
      >
        {reviewData.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="review" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
