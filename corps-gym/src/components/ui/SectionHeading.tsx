import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  titleHighlight,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {tag && (
        <div className={`section-label ${centered ? "justify-center" : ""}`}>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="section-heading">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-fire">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
