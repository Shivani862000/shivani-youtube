

export const VideoCard=({info})=>{
    // console.log(info)
    const {snippet , statistics} =info;
    const {channelTitle , title,thumbnails}= snippet
    return (
       <>
      
    <div className="flex flex-col mb-8 overflow-hidden rounded shadow-lg bg-white transition-transform duration-300 transform hover:scale-105">
      <img
        className="h-full w-full object-fill "
        src={thumbnails.medium.url || ""}
        alt="Video Thumbnail"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title || "title"}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="text-gray-700 text-base">
           views {statistics.viewCount}
        </p>
      </div>

    </div>

       </>
      );
    
}