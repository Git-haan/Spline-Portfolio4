"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "@/data";

const Card = () => {
    return (
        <section id="projects" className="max-w-5xl mx-auto">
          <p className="max-w-5xl mx-auto pl-4 text-lg"> — PROJECTS </p>
          <HoverEffect items={projects} />
        </section>
    )
}


export default Card;