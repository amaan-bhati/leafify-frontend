'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  
  {
    title: "Carbon Footprint Calculator",
    description:
      "Use our interactive tool to measure your environmental impact and receive personalized recommendations for reducing your carbon footprint.",
    link: "/calculator",
  },
  {
    title: "Sustainable Living Guide",
    description:
      "Access comprehensive resources and practical tips for adopting an eco-friendly lifestyle, from energy conservation to waste reduction strategies.",
    link: "/guide",
  },
  {
    title: "Community Initiatives",
    description:
      "Join local environmental projects and connect with like-minded individuals. Participate in tree planting, beach cleanups, and educational workshops.",
    link: "/community",
  },
  {
    title: "Green Business Directory",
    description:
      "Discover and support environmentally conscious businesses in your area. Our verified partners are committed to sustainable practices and ethical operations.",
    link: "/directory",
  },
  {
    title: "Recycling Hub",
    description:
      "Learn about proper recycling practices, find local recycling centers, and get information about disposing of different types of materials responsibly.",
    link: "/recycling",
  },
  {
    title: "Environmental Impact Blog",
    description:
      "Stay informed with our latest articles on environmental issues, sustainable innovations, and success stories from our community members making a difference.",
    link: "/blog",
  },
];
