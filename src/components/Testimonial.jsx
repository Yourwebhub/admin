"use client";
import React from 'react';
import { Rating } from 'primereact/rating';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const data = [
    {
      title: "Kenji Tanaka",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
      revs: "Exceptional service! The Web Hub team exceeded my expectations."
    },
    {
      title: "Mei Ling",
      img: "https://randomuser.me/api/portraits/women/15.jpg",
      revs: "Amazing work! Communication was smooth, and delivery was fast."
    },
    {
      title: "Hiroshi Sato",
      img: "https://randomuser.me/api/portraits/men/20.jpg",
      revs: "Very professional and knowledgeable. I highly recommend Web Hub!"
    },
    {
      title: "Aya Nakamura",
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      revs: "Web Hub went above and beyond to optimize my website performance!"
    },
    {
      title: "Li Wei",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      revs: "Fast and reliable service. I will definitely work with them again!"
    },
    {
      title: "Sakura Chen",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      revs: "Great experience working with Web Hub. Highly recommended!"
    },
    {
      title: "Takeshi Yamamoto",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      revs: "Top-notch service and attention to detail. Thank you!"
    },
    {
      title: "Yuki Fujimoto",
      img: "https://randomuser.me/api/portraits/women/10.jpg",
      revs: "Excellent service! Web Hub truly understands customer needs."
    },
  ];
  

  return (
    <div className="px-4 md:px-8 ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="md:h-72 h-44 cr rounded-xl p-4 cursor-pointer border border-dark dark:border-light my-5 flex flex-col md:flex-row justify-center mr-11 items-center"
          >
            <div className="flex gap-4 md:gap-6 items-center md:items-start">
              <div className="w-16 md:w-1/4 border overflow-hidden rounded-full">
                <img
                  src={item.img}
                  alt={`Profile picture of ${item.title}`}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 justify-between w-2/3">
                <Rating
                  disabled
                  value={5} // Consider making this dynamic if needed
                  cancel={false}
                  className="text-bllue flex items-center mt-1"
                />
                <h3 className="text-base md:text-lg font-medium text-bllue">
                  @{item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
                  {item.revs}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;