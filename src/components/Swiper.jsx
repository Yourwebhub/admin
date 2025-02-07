'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const services = [
  {
    title: "Web Development",
    description: "your Web Hub specializes in creating dynamic, responsive websites that capture your brand’s essence and enhance user engagement. Our expert team ensures each site is optimized for performance, security, and scalability, empowering your business to succeed online",
    image: "https://jaidooempire.com/images/web.png",
    link:"/service/wordpress"
  },
  {
    title: "App Development",
    description: "your Web Hub creates custom mobile and web applications that are designed to drive user engagement and business growth. Our expert team builds high-performance, scalable apps with a focus on security and seamless functionality. We deliver innovative solutions that transform your ideas into intuitive, user-friendly apps.",
    image: "https://jaidooempire.com/images/app.png",
    link:"/service/wordpress"
  },
  {
    title: "SEO",
    description: "your Web Hub offers expert SEO services to boost your website’s visibility and drive organic traffic. Our strategies focus on improving search rankings and increasing conversions for sustainable business growth.",
    image: "https://jaidooempire.com/images/seo.png",
    link:"/service/wordpress"
  },
  {
    title: "WordPress",
    description: "your Web Hub specialize in creating custom, high-performing WordPress websites designed for speed, security, and seamless user experiences. Our visually stunning and functional sites help elevate your online presence and drive engagement.",
    image: "/wordpress.png",
    link:"/service/wordpress"
  },
  {
    title: "Social Media Marketing",
    description: "your Web Hub  provides strategic social media marketing services to enhance your online presence and engage your target audience. Our team creates tailored campaigns across platforms to boost brand awareness, drive traffic, and increase conversions.",
    image: "https://jaidooempire.com/images/smm.png",
    link:"/service/wordpress"
  },
];

const SwiperComponent = () => {
  return (
    <>
    <motion.h1 initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{  duration: 0.9 }}
             viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center">
              <span className="text-bllue">O</span>ur Services
            </motion.h1>

      <div className="swiper-container w-[80%] mx-auto h-[370px] rounded-xl overflow-hidden shadow-lg">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 5000, // Auto-scroll delay in milliseconds
            disableOnInteraction: false, // Continue auto-scroll even after user interaction
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper h-full "
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="text-center">
              <div
                className="flex flex-col items-center bg-cover rounded-xl  h-full "
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              >
                      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 bg-black/80 h-full rounded-xl flex items-center justify-center">
        <div className="">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {service.title}
          </h2>
          <p className="text-sm md:text-xl text-white mb-8 leading-relaxed drop-shadow">
            {service.description}
          </p>
          <button
            variant="secondary"
            size="lg"
            className="text-  md:text-lg  p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-bllue text-light"
          >
            More Details
          </button>
        </div>
      </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* we offer  */}
      <div className=" py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-bllue text-center my-6">
          We Offer
        </h2>
        <p className="text-dark dark:text-light text-lg leading-relaxed">
         <q> At <Link href={"/"} className="text-bllue font-semibold">Your Web Hub</Link>, we specialize in providing a comprehensive range of services to help businesses thrive in the digital world. From crafting responsive websites and high-performing mobile applications to optimizing your online presence with expert SEO strategies, we’ve got you covered. Our team excels in custom WordPress development, offering seamless content management, and targeted social media marketing to elevate your brand’s visibility and engagement. Let us bring your vision to life with innovative, tailored solutions designed to drive growth and success.
         </q></p>
      </div>
    </div>
    </>
  );
};

export default SwiperComponent;
