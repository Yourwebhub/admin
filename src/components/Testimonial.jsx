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
      title: "James Miller",
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      revs: "Usama is amazing at what he does and I highly recommend him!"
    },
    {
      title: "Emily Smith",
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
      revs: "Outstanding job done by Osama. I will definitely rehire him for future projects"
    },
    {
      title: "Michael Johnson",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      revs: "Worked professionally and exceptional services. Thank you!"
    },
    {
      title: "Sophia Taylor",
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      revs: "Usama did a great job he went above and beyond to help me optimize my profile on Upwork!"
    },
    {
      title: "William Brown",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      revs: "Usama is amazing at what he does and I highly recommend him!"
    },
    {
      title: "Olivia Wilson",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      revs: "Great to work with Usama. Very quick strong communication and gets job done!"
    },
    {
      title: "Christopher Davis",
      img: 'https://randomuser.me/api/portraits/men/4.jpg',
      revs: "Worked professionally and exceptional services. Thank you!"
    },
    {
      title: "Ava Martinez",
      img: "https://randomuser.me/api/portraits/women/11.jpg",
      revs: "Usama did a great job he went above and beyond to help me optimize my profile on Upwork!"
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