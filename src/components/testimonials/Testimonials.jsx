import React from "react";
import "./testimonials.css";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  const data = [
    {
      Image: AVTR1,
      title: "Shrey",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, provident cum, consequuntur sapiente similique nihil error, debitis facilis omnis voluptas explicabo minus? Inventore saepe reprehenderit velit nobis molestias perferendis itaque!",
    },
    {
      Image: AVTR2,
      title: "Soham",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, provident cum, consequuntur sapiente similique nihil error, debitis facilis omnis voluptas explicabo minus? Inventore saepe reprehenderit velit nobis molestias perferendis itaque!",
    },
    {
      Image: AVTR3,
      title: "Nishi",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, provident cum, consequuntur sapiente similique nihil error, debitis facilis omnis voluptas explicabo minus? Inventore saepe reprehenderit velit nobis molestias perferendis itaque!",
    },
    {
      Image: AVTR4,
      title: "Divyesh",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, provident cum, consequuntur sapiente similique nihil error, debitis facilis omnis voluptas explicabo minus? Inventore saepe reprehenderit velit nobis molestias perferendis itaque!",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        pagination={{ clickable: true }}
      >
        {data.map(({ Image, title, content }, index) => {
          return (
            <SwiperSlide id={index} className="testimonial">
              <div className="client__avatar">
                <img src={Image} alt={title} />
              </div>
              <h5 className="client__name">{title}</h5>
              <small className="client__review">{content}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
