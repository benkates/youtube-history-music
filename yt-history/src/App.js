import "./App.css";
import { useEffect, useState } from "react";
import { json } from "d3";
import truncate from "lodash/truncate";
// import TopChannels from "./TopChannels";
import WatchTimeline from "./WatchTimeline";
import VideoEmbed from "./VideoEmbed";
import TopVideos from "./TopVideos";
import WatchTimeline2 from "./WatchTimeline2";

// import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";

//TODO: remove "https://youtube.com/" from video/channel IN R stuff to reduce data size
//TODO: use UIKit library for everything (ie: dropdowns are weird)
//TODO: rename childtoParent() and childtoParentVideo()
//TODO: implement theming for the main bg color #282c34
//DONE: barchart to filter timeline

/*
- what is the trend of watch activity over time for a specific channel
- what video (per channel) have i watched the most?
- who have i watched the most consistently?
- feature highlight: tiny desks?
- feature highlight: kexp?

- info on embedding a small "subscribe" button https://developers.google.com/youtube/youtube_subscribe_button
- info on embedding iframes https://developers.google.com/youtube/iframe_api_reference
*/

function App() {
  //init data state
  const [data, setData] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("NPR Music");
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/watch?v=IUMTaAQ43lY"
  );

  //create fun to bring data from the child component (TopChannels) to App
  const childToParent = (e) => {
    setSelectedChannel(e);
  };

  const childToParentVideo = (e) => {
    setSelectedVideo(e);
  };

  //get data and set it
  useEffect(() => {
    console.log("fetching data");

    //get data
    json("top_watch_history_music.json")
      .then((d) => {
        //iterate over, format, create new fields
        d.map((e) => {
          e.timestamp = new Date(e.timestamp);
          e.year = e.timestamp.getFullYear();
          e.month =
            String(e.timestamp.toLocaleString("default", { month: "long" })) +
            " '" +
            String(e.timestamp.getUTCFullYear().toString().slice(2));
          e.channel_name_full = e.channel_name;
          e.channel_name = truncate(e.channel_name, { length: 25 });
        });
        return d;
      })
      //set the stateful data
      .then(setData);
  }, []);

  return (
    <Container
      className="App"
      maxWidth="xl"
      sx={{ backgroundColor: "#282c34" }}
    >
      <Typography variant="h2" component="h1" gutterBottom color="white">
        What's Ben's Favorite Music Videos on YouTube?
      </Typography>
      {/* <TopChannels data={data} childToParent={childToParent}></TopChannels> */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ p: 1 }}
      >
        <Grid item lg={6} xs={12}>
          <TopVideos
            data={data}
            childToParent={childToParent}
            childToParentVideo={childToParentVideo}
          ></TopVideos>
        </Grid>
        <Grid item lg={6} xs={12}>
          <WatchTimeline2
            data={data}
            selectedChannel={selectedChannel}
            width={"540"}
            height={"200"}
          ></WatchTimeline2>
          <VideoEmbed
            data={data}
            selectedChannel={selectedChannel}
            selectedVideo={selectedVideo}
          ></VideoEmbed>
        </Grid>
        <Grid item lg={12} sx={{ height: 150 }}></Grid>
        {/* <Grid item lg={6}>
          <Typography component="p" color="white">
            Selected Channel Stats: {selectedChannel}
          </Typography>
          <WatchTimeline
            data={data}
            selectedChannel={selectedChannel}
          ></WatchTimeline>
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default App;
