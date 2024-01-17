

import React from "react"
import { Button } from "./Button"
const filters = ["ALL","JavaScript","React","HTML", "Music","Cooking", "Entertainment", "Gaming", "News", "Sports", "Science & Tech"];

export const ButtonList=()=>{
    return(
        <>
       <div className="flex gap-8 py-8 overflow-scroll">
      {filters.map((filter, index) => (
        <Button key={index} name={filter} />
      ))}
    </div>
        </>
    )
}