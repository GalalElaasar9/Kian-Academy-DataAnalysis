import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
type SubImage = {
  id: number;
  subImage: string;
};

type Project = {
  id: number;
  img: string;
  subImages?: SubImage[];
};

type Props = {
  project: Project;
};

export default function Projects({ project }: Props) {
  const images = [ project.img, ...(project.subImages?.map((img) => img.subImage) || []),];

  return (
    <div className="aspect-4/3 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`project-${index}`}
              className="
                w-full
                h-full
                object-cover
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}