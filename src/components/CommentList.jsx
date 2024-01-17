import { Commentbox } from "./Commentbox"


export const CommentList =({comments})=>{
    return comments.map((comment,index)=>
    (
        <div>
            <Commentbox key={index} data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
              <CommentList key={index} comments={comment.replies}/>
            </div>
        </div>
    )
    )
}