"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Sparkles } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
  .swiper {
    width: 50%;
    padding-bottom: 50px;
  }
   
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
   
  .swiper-slide img {
    display: block;
    width: 100%;
  }
   
  `;

  // Sample images if none provided
  const defaultImages = [
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
      alt: "Office workspace"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop",
      alt: "Modern office"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=500&fit=crop",
      alt: "Team meeting"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
      alt: "Creative workspace"
    },
  ];

  const displayImages = images || defaultImages;

  return (
    <section className="w-full bg-white">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl bg-white">
        <div className="relative mx-auto flex w-full flex-col bg-white p-2 md:items-start md:gap-8 md:p-2">
          
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
           
          </div>
           
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
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
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {displayImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <img
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-xl object-cover"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {displayImages.map((image, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <div className="size-full rounded-3xl">
                      <img
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-xl object-cover"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};