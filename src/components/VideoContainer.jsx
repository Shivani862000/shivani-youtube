import React, { useEffect, useState } from "react";
import { Api_Url } from "../utils/constant";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(Api_Url);
    const videojson = await data.json();
    setvideo(videojson.items);
   
  };
  return (
    <>

      <div className="max-w-[1250px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      
      
      {video.map((item)=>
      <Link key={item.id} to={`/watch?v=${item.id}`}>
      <VideoCard  info={item}/>
      </Link>
      
      )}
      </div>
   
      
    </>
  );
};
