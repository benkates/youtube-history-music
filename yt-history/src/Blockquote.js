import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";

import { filter, rollup, greatest } from "d3";

// TODO: write commentary summaries for some videos

function Blockquote({ data, selectedVideo, selectedChannel, WRITING }) {
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
  let video = "";
  if (selectedVideo === null && data2 !== undefined) {
    video = data2[0];
  } else if (selectedVideo !== null && data2 !== undefined) {
    video = selectedVideo;
  } else {
    return;
  }

  //TODO: get
  const toggle = WRITING.some((e) => e.video_url === video);
  let selectedText = "";
  if (toggle) {
    selectedText = WRITING.filter((d) => d.video_url === video)[0]["text"];
  }

  return (
    <Slide direction="left" in={toggle} mountOnEnter unmountOnExit>
      <Paper
        sx={{
          backgroundColor: "#282c34",
          border: "1px solid white",
          color: "white",
          mt: 3,
          p: 3,
          fontStyle: "italic",
        }}
      >
        <blockquote>{selectedText}</blockquote>
      </Paper>
    </Slide>
  );
}

export default Blockquote;
