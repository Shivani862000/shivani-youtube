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
      <div className=" grid grid-cols-4 gap-7 py-12">
        {video.map((item) => (
          <Link key={item.id} to={`/watch?v=${item.id}`}>
            <VideoCard info={item} />
          </Link>
        ))}
      </div>
    </>
  );
};
