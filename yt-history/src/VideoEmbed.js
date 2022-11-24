import { filter, rollup, greatest } from "d3";
import { useRef, useEffect } from "react";

//DONE: background image peeking through when iframe is shown
//DONE: pause and show the static in between videos?
//DONE: add back in timeline
//DONE: rounded edges
//DONE: responsive size
//DONE: remove player controls

function VideoEmbed({ data, selectedChannel, selectedVideo }) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    iframeRef.current.style.zIndex = -1;
    containerRef.current.style.backgroundImage =
      "url('https://i.giphy.com/media/YRcXl6VfNhCorklI0R/giphy.webp')";
    setTimeout(() => {
      iframeRef.current.style.zIndex = 1;
      containerRef.current.style.backgroundImage = null;
    }, 1000);
  }, [selectedChannel, selectedVideo]);

  //filter data to the selected channel
  let data2 =
    selectedChannel === "All Channels"
      ? data
      : filter(data, (d) => d.channel_name === selectedChannel);

  //roll up data to the most occurances
  data2 = rollup(
    data2,
    (v) => v.length,
    (e) => e.video_url
  );

  //get the video with the most views
  data2 = greatest(data2, (d) => d[1]);

  //extract the video ID
  let embedId = "";
  if (selectedVideo === null && data2 !== undefined) {
    embedId = data2[0].match("v=(.*)")[1];
  } else if (selectedVideo !== null && data2 !== undefined) {
    embedId = selectedVideo.match("v=(.*)")[1];
  } else {
    embedId = "IUMTaAQ43lY";
  }

  return (
    <div className="video-container" ref={containerRef}>
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        loading="lazy"
        src={`https://www.youtube.com/embed/${embedId}?controls=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        // allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
}

export default VideoEmbed;
