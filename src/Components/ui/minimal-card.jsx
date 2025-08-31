import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const MinimalCard = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[24px] bg-neutral-50 p-2 no-underline shadow-sm transition-colors hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 ",
      "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
      "shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px]",
      "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}>
    {children}
  </div>
))
MinimalCard.displayName = "MinimalCard"

const MinimalCardImage = React.forwardRef(({ className, alt, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative mb-6 h-[190px] w-full rounded-[20px]",
      "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
      "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}>
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="absolute inset-0 size-full rounded-[16px] object-cover"
    />
  </div>
))
MinimalCardImage.displayName = "MinimalCardImage"

// ✅ New: MinimalCardVideo
const MinimalCardVideo = React.forwardRef(({ className, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative mb-6 h-[190px] w-full rounded-[20px] overflow-hidden",
      "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
      "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}>
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 size-full rounded-[16px] object-cover"
    />
  </div>
))
MinimalCardVideo.displayName = "MinimalCardVideo"

const MinimalCardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("mt-2 px-1 text-lg font-semibold leading-tight", className)}
    {...props}
  />
))
MinimalCardTitle.displayName = "MinimalCardTitle"

const MinimalCardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("px-1 pb-2 text-sm text-neutral-500", className)}
    {...props}
  />
))
MinimalCardDescription.displayName = "MinimalCardDescription"

const MinimalCardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
MinimalCardContent.displayName = "MinimalCardContent"

const MinimalCardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
MinimalCardFooter.displayName = "MinimalCardFooter"

export {
  MinimalCard,
  MinimalCardImage,
  MinimalCardVideo,   // ✅ Export new video component
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
}

export default MinimalCard
