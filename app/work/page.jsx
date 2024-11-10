"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "1",
    category: "frontend",
    title: "Netflix Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "Angular" },
      { name: "Typescript" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/serhasHacizade/clone-projects/tree/main/netflix-clone",
  },
  {
    num: 2,
    category: "full stack",
    title: "Notion Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Convex" },
      { name: "Clerk" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/serhasHacizade/clone-projects/tree/main/notion-clone",
  },
  {
    num: 3,
    category: "full stack",
    title: "Spotify Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "Supabase" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/serhasHacizade/clone-projects/tree/main/spotify-clone",
  },
  {
    num: 4,
    category: "frontend",
    title: "Kanban Project",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "Redux" },
      { name: "Vite" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/serhasHacizade/kanban-task-managment",
  },
  {
    num: 5,
    category: "full stack",
    title: "Budget Tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "prisma" },
      { name: "Tailwind.css" },
      { name: "Radix.ui" },
    ],
    image: "/assets/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/serhasHacizade/prisma",
  },
  {
    num: 6,
    category: "frontend",
    title: "Deezer Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "Vue.js" },
      { name: "Javascript" },
      { name: "Vite" },
      { name: "Tailwind.css" },
      { name: "Pinia" },
    ],
    image: "/assets/assets/work/thumb6.png",
    live: "",
    github: "https://github.com/serhasHacizade/clone-projects/tree/main/deezer-clone",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>Github Repository</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
              <p className="text-white">You can slide this picture right and left</p>
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleChange}>
              {
                projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[440px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative h-full w-full">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
