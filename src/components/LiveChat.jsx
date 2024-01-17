import { useEffect, useState } from "react";

import {ChatMessage} from "./ChatMessage";
import { generateRandomName , makeRandomMessage } from "../utils/suggestion";
import  { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
export const LiveChat = () => {
  const [liveChat ,  setLiveChat]=useState("")
 const dispatch = useDispatch();
 const chatMessages = useSelector(store=>store.chat.messages)
  useEffect(()=>{
  const timerC=  setInterval(()=>{

    dispatch(
      addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20) + " 🚀",
      })
    )
  },2000)
  return ()=> clearInterval(timerC);
  },[])
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage(
              {
                name:"shivani",
              message:liveChat
              }
            )
          )
        
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveChat}
          onChange={(e)=>setLiveChat(e.target.value)}
        
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};
