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
    num: 1,
    category: "frontend",
    title: "Netflix Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim consectetur provident molestias saepe eaque!",
    stack: [
      { name: "Angular" },
      { name: "Typescript" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/thumb1"
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
    image: "/assets/work/thumb2"
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
    image: "/assets/work/thumb3"
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
    image: "/assets/work/thumb4"
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
    image: "/assets/work/thumb5"
  },
];

const Work = () => {

  const [project, setproject] = useState(proje);


  return <div>Work page</div>;
};

export default Work;
