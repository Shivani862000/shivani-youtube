import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { LiveChat } from "./LiveChat";
import { CommentsContainer } from "./CommentsContainer";
export const Watch = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
    <section className="watchpage py-8">
    <div className="grid grid-cols-12 gap-8">
          <div className="video col-span-8  ">
            <iframe
              width="100%"
              height="700"
              src={"https://www.youtube.com/embed/" + searchParam.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="livechat col-span-4">
            <LiveChat />
          </div>
          </div>
          <div className="grid grid-cols-12 gap-8">
          <div className="comment col-span-8 ">  <CommentsContainer /></div>
          <div className="suggestion-video col-span-4">
            
          </div>
         </div>
    </section>
    </>
  );
};
