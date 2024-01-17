
import React from "react";
import { Commentbox } from "./Commentbox.jsx";
import { CommentList } from "./CommentList.jsx";

const commentsData = [
    {
      name: "Shivani verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shivani verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Shivani verma",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Shivani verma",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Shivani verma",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Shivani verma",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Shivani verma",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Shivani verma",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Shivani verma",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shivani verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shivani verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shivani verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shivani verma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
export const CommentsContainer =()=>{
    return(
        <>
         <div>
            <h1 className="text-2xl font-bold"> Comment:</h1>
           
            <CommentList comments={commentsData}/>
         </div>
        </>
    )
}