"use client";
import { FileUpload } from "./ui/file-upload";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function RedirectSection() {
  const words = [
    {
      text: "Take",
    },
    {
      text: "action",
    },
    {
      text: "for",
    },
    {
      text: "our",
    },
    {
      text: "planet",
      className: "text-green-500 dark:text-green-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <FileUpload/>
      <p className="text-green-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Every small step towards sustainability matters
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-green-600 border dark:border-white border-transparent text-white text-sm hover:bg-green-700">
          Calculate Impact
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-green-600 border border-green-600 text-sm hover:bg-green-50">
          Learn More
        </button>
      </div>
    </div>
  );
}
