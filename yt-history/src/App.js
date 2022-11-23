import "./App.css";
import { useEffect, useState } from "react";
import { json } from "d3";
import truncate from "lodash/truncate";

import VideoEmbed from "./VideoEmbed";
import TopVideosTable from "./TopVideosTable";
import WatchBarChart from "./WatchBarChart";
import Blockquote from "./Blockquote";
import ChannelDropdown from "./ChannelDropdown";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

//TODO: rename childtoParent() and childtoParentVideo()
//TODO: implement theming for the main bg color #282c34
//TODO: remove "https://youtube.com/" from video/channel IN R stuff to reduce data size
//TODO: Blockquote under video on desktop but on top on mobile
//TODO: when you select a new channel as a filter, automatically bring up the first video

//DONE: reposition divs to have chart on top of one but have the video
//DONE: barchart to filter timeline

function App() {
  //init data state
  const [data, setData] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("All Channels");
  const [selectedVideo, setSelectedVideo] = useState(null);

  //get data and set it
  useEffect(() => {
    console.log("fetching data");

    //get data
    json("top_watch_history_music.json")
      .then((d) => {
        //iterate over, format, create new fields
        d.forEach((e) => {
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
    //TODO: add in set state of channel (most views etc etc)
  }, []);

  return (
    <Container
      className="App"
      maxWidth="xl"
      sx={{ backgroundColor: "#282c34" }}
    >
      {/* title */}
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        color="white"
        sx={{ textAlign: "center", mt: 3, fontFamily: "Abril Fatface" }}
      >
        What are Ben's Favorite Music Videos on YouTube?
      </Typography>

      {/* parent div */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ p: 1 }}
      >
        {/* barchart + table */}
        <Grid item lg={6} xs={12}>
          <ChannelDropdown
            data={data}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            setSelectedVideo={setSelectedVideo}
          ></ChannelDropdown>
          <ParentSize className="graph-container" debounceTime={10}>
            {({ width: visWidth, height: visHeight }) => (
              <WatchBarChart
                data={data}
                selectedChannel={selectedChannel}
                width={visWidth}
                height="164"
              ></WatchBarChart>
            )}
          </ParentSize>
          <TopVideosTable
            data={data}
            selectedChannel={selectedChannel}
            setSelectedVideo={setSelectedVideo}
          ></TopVideosTable>
        </Grid>

        {/* video + blockquote */}
        <Grid item lg={6} xs={12}>
          <VideoEmbed
            data={data}
            selectedChannel={selectedChannel}
            selectedVideo={selectedVideo}
          ></VideoEmbed>
          <Blockquote
            data={data}
            selectedVideo={selectedVideo}
            selectedChannel={selectedChannel}
          ></Blockquote>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
