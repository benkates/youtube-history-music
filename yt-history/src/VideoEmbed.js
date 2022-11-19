import * as d3 from "d3";
function VideoEmbed({ data, selectedChannel }) {
  //filter data to the selected channel
  let data2 =
    selectedChannel === undefined
      ? data
      : d3.filter(data, (d) => d.channel_name === selectedChannel);

  //roll up data to the most occurances
  data2 = d3.rollup(
    data2,
    (v) => v.length,
    (e) => e.video_url
  );

  //get the video with the most views
  data2 = d3.greatest(data2, (d) => d[1]);
  let embedId = "rImxuuD_kwM";
  if (data2 !== undefined) {
    embedId = data2[0].match("v=(.*)")[1];
  }
  console.log(embedId);

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        loading="lazy"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default VideoEmbed;
