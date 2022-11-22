import { filter, rollup, greatest } from "d3";

//DONE: responsive size

function VideoEmbed({ data, selectedChannel, selectedVideo }) {
  //filter data to the selected channel
  let data2 =
    selectedChannel === undefined
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
  let vid = "";
  let embedId = "IUMTaAQ43lY";
  if (data2 !== undefined) {
    vid = data2[0];
  }

  if (selectedVideo !== undefined) {
    vid = selectedVideo;
  }
  embedId = vid.match("v=(.*)")[1];

  return (
    <div className="video-container" style={{ borderRadius: "4px !important" }}>
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
}

export default VideoEmbed;
