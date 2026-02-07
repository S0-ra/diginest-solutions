"use client";
import { useEffect, useRef, useState } from "react";
import Tag from "./ui/tag";
import { useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `We design and build smart IT solutions that help businesses move faster, operate smarter, and stay competitive.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28">
          <div className="flex justify-center">
            <Tag>Welcome To Diginest</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Upgrade the way your business works.</span>{" "}
            <span>
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && "text-white")}
                >
                  {`${word} `}{" "}
                </span>
              ))}
            </span>
            <span className="text-primary block mt-8">
              That&apos;s why we started Diginest
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
