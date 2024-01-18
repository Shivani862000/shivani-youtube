import React from "react";
import { Button } from "./Button";

const filters = [
  "ALL",
  "JavaScript",
  "React",
  "HTML",
  "Music",
  "Cooking",
  "Entertainment",
  "Gaming",
  "News",
  "Sports",
  "Science & Tech",
  "Entertainment",
  "Gaming",
  "News",
  "Sports",
  "Science & Tech",
];

export const ButtonList = () => {
  return (
    <>
      <div className="flex overflow-x-auto w-full py-8 gap-6">
        {filters.map((filter, index) => (
          <Button key={index} name={filter} />
        ))}
      </div>
    </>
  );
};
