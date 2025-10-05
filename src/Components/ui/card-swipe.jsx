"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: gray;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 18px;
      object-fit: cover;
    }
  `;

  // Default images
  const defaultImages = [
    { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop", alt: "Office workspace" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop", alt: "Modern office" },
    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=500&fit=crop", alt: "Team meeting" },
    { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop", alt: "Creative workspace" },
  ];

  const displayImages = images || defaultImages;

  return (
    <section className="w-full bg-gray-50 px-4 ">
      <style>{css}</style>
      <div className="mx-auto w-full  p-4 md:p-6">
        <Swiper
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          effect={"cards"}
          grabCursor={true}
          loop={true}
          slidesPerView={"auto"}
          rewind={true}
          cardsEffect={{ slideShadows: slideShadows }}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {displayImages.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full   max-w-[400px] md:max-w-[350px] lg:max-w-[400px] h-auto rounded-2xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
