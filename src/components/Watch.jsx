

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { LiveChat } from "./LiveChat";
import { CommentsContainer } from "./CommentsContainer";
export const Watch =()=>{
    const [searchParam] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(()=>{
          dispatch(closeMenu())
    },[])
    return(
        <>
        <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
        </>
    )
}