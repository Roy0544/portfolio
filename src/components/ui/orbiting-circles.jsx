import React from "react"
import { cn } from "@/lib/utils"

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed
  
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/10 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
            }}
            className={cn(
              "absolute inset-0 m-auto flex items-center justify-center animate-orbit transform-gpu",
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            <div 
              style={{ width: iconSize, height: iconSize }}
              className="flex items-center justify-center"
            >
              {child}
            </div>
          </div>
        );
      })}
    </>
  );
}
