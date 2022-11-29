import "./App.css";
import { useEffect, useState } from "react";
import { json, timeMonth, timeFormat } from "d3";

import IntroText from "./IntroText";
import VideoEmbed from "./VideoEmbed";
import TopVideosTable from "./TopVideosTable";
import WatchBarChart from "./WatchBarChart";
import Blockquote from "./Blockquote";
import ChannelDropdown from "./ChannelDropdown";
import WRITING from "./WRITING";
import FooterText from "./FooterText";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

//UI
//TODO: uncomment GA
//TODO: opengraph stuff
//TODO: fix favicon
//TODO: add icons to root folder

//WRITING
//TODO: README
//TODO: wrap up commenting

//HOLD: Blockquote under video on desktop but on top on mobile

//DONE: change language from plays to views
//DONE: change bg color
//DONE: Fade in intro text using css
//DONE: Add link to my homepage in footer
//DONE: responsively narrow the text cols
//DONE: when you select a new channel as a filter, automatically bring up the first video
//DONE: reposition divs to have chart on top of one but have the video
//DONE: barchart to filter timeline

function App() {
  //init data state
  const [data, setData] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("All Channels");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  //use theming defined in index.js
  const theme = useTheme();

  //get data and set it
  useEffect(() => {
    console.log("fetching data");

    //get data
    json("top_watch_history_music.json")
      .then((d) => {
        //iterate over, format, create new fields
        d.forEach((e) => {
          //replace T in string with space because iPad has trouble;
          //https://stackoverflow.com/a/13363791/5800118
          e.timestamp = new Date(e.timestamp.replace(" ", "T"));
          e.month = timeMonth.floor(e.timestamp);
          e.month_label = timeFormat("%b %Y")(e.month);
        });
        return d;
      })
      //set the stateful data
      .then(setData);
  }, []);

  return (
    <Container maxWidth="xl" p="0 16px" className="fade-in">
      {/* parent div */}
      <IntroText theme={theme} />
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {/* barchart + table */}
        <Grid item md={6} xs={12} id="watch-bar-chart-top-videos-table">
          <ChannelDropdown
            data={data}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            setSelectedVideo={setSelectedVideo}
            setSelectedMonth={setSelectedMonth}
          />
          <ParentSize className="graph-container" debounceTime={10}>
            {({ width: visWidth, height: visHeight }) => (
              <WatchBarChart
                data={data}
                selectedChannel={selectedChannel}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                width={visWidth}
                height={200}
              ></WatchBarChart>
            )}
          </ParentSize>
          <TopVideosTable
            data={data}
            selectedChannel={selectedChannel}
            setSelectedVideo={setSelectedVideo}
            selectedMonth={selectedMonth}
            WRITING={WRITING}
          ></TopVideosTable>
        </Grid>
        {/* video + blockquote */}
        <Grid item md={6} xs={12} id="video-embed-blockquote">
          <VideoEmbed
            data={data}
            selectedChannel={selectedChannel}
            selectedVideo={selectedVideo}
          ></VideoEmbed>
          <Blockquote
            data={data}
            selectedVideo={selectedVideo}
            selectedChannel={selectedChannel}
            WRITING={WRITING}
          ></Blockquote>
        </Grid>
      </Grid>
      <FooterText></FooterText>
    </Container>
  );
}

export default App;
