"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        fill="none"
        className="absolute h-full w-full inset-0"
      >
        <g filter="url(#filter0_f)">
          <motion.path
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 0,
            }}
          />
          <motion.path
            d="M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
          <motion.path
            d="M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="-400"
            y="-400"
            width="1400"
            height="1400"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="1000"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="0.325" stopColor="#6344F5" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
