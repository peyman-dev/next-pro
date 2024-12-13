import React from "react";

interface GradientTextProps {
  text: string;
  fromColor?: string;
  toColor?: string;
  viaColor?: string;
  className?: string;
  props: any;
}

export default function GradientText({
  text,
  fromColor = "from-white",
  toColor = "to-white/40",
  className = "",
  viaColor = "via-white/90",
  ...props
}: GradientTextProps) {
  return (
    <span
      {...props}
      className={`bg-gradient-to-b ${fromColor} ${viaColor} ${toColor} inline-block text-transparent bg-clip-text ${className}`}
    >
      {text}
    </span>
  );
}
