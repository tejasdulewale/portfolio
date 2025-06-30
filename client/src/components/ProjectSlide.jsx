import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "../css/projectslider.css";
import { Pagination, Grid } from "swiper/modules";
import ProjectCard from "./ProjectCard";
export default function ProjectSlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Grid]}
        grid={{ rows: 2, fill: "row" }}
        className="mySwiper"
        breakpoints={{
          1200: { slidesPerView: 3, grid: { rows: 2 } },
          900: { slidesPerView: 2, grid: { rows: 2 } },
          600: { slidesPerView: 1, grid: { rows: 2 } },
        }}
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
