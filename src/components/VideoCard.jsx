export const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  // Get the year from the given date string
  const yearFromDateString = new Date(publishedAt).getFullYear();
  var counts = statistics.viewCount;
  function convertToKFormat(counts) {
    const count = parseInt(counts, 10);

    if (count >= 1000) {
      const kCount = (count / 1000).toFixed(1);
      return `${kCount}k`;
    }

    return count.toString();
  }

  const formattedViewCount = convertToKFormat(counts);
  return (
    <>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumbnails.medium.url || ""}
            alt=""
          />
          {/* {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )} */}
        </div>
        <div className="flex text-black mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={thumbnails.medium.url || ""}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">{title}</span>
            <span className="text-[12px] font-semibold mt-2 text-black /[0.7] flex items-center">
              {channelTitle}

            </span>
            <div className="flex text-[12px] flex-col font-semibold text-black /[0.7] truncate overflow-hidden">
        
              <p> Views:{formattedViewCount}</p>
              <p>publishedAt: {yearFromDateString}</p>
              <span className="flex text-[24px] leading-none font-bold text-black /[0.7] relative top-[-10px] mx-1">
                .
              </span>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
