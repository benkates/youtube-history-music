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
// import { useTheme } from "@mui/material/styles";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

//UI
//TODO: Blockquote under video on desktop but on top on mobile
//TODO: graphics scrollytelling in the background
//TODO: Add GA
//TODO: Scrollytelling at the top and logos come in in background
//TODO: responsively narrow the text cols
//TODO: opengraph stuff

//WRITING
//TODO: Tom misch has been in so many of the channels, highlight that in intro text
//TODO: introductory text, explainer that you can click on table to scroll down, etc.
//TODO: footer/outro...
//TODO: Comment on the Vulf msg being super high
//TODO: README
//TODO: Add link to my homepage in footer

//DONE: when you select a new channel as a filter, automatically bring up the first video
//DONE: reposition divs to have chart on top of one but have the video
//DONE: barchart to filter timeline

function App() {
  //init data state
  const [data, setData] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("All Channels");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // const theme = useTheme();

  const WRITING = [
    {
      video_url: "https://www.youtube.com/watch?v=IUMTaAQ43lY",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      video_url: "https://www.youtube.com/watch?v=hC8CH0Z3L54",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

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
  }, []);

  return (
    <Container maxWidth="xl">
      {/* title */}
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color="white"
          sx={{ textAlign: "center", mt: 3, fontFamily: "Abril Fatface" }}
        >
          What music-related videos are impacting Ben the most?
        </Typography>
      </Container>
      {/* TODO: h2 Introduction */}
      <Container maxWidth="md">
        <Typography
          component="p"
          gutterBottom
          color="white"
          sx={{
            textAlign: "left",
            mt: 3,
            mb: 3,
            color: "lightgrey",
          }}
        >
          Ever since I can remember, I’ve loved watching musical performances on
          YouTube. I’m not talking “concert” footage, but edited YouTube videos
          of bands, artists, and music producers. There’s something about
          intimate recordings of performance and the creative process that
          captivate me as a hobbyist musician!
          <br></br>
          <br></br>
          There are so many YouTube channels and media platforms out there
          producing amazing music content, particularly the ones that have
          regular series! I used the “Google Takeout” data export feature to
          dive into my YouTube history and filter to some of the channels I
          watch most.
        </Typography>
        <Typography
          component="p"
          gutterBottom
          color="white"
          sx={{
            textAlign: "left",
            mt: 3,
            mb: 3,
            color: "lightgrey",
          }}
        >
          Tiny Desk amazing Against the Clock series from FACT Some good notes
          in here about the channels in my previous writing
        </Typography>
        {/* TODO: h2 Notes about the data */}
        <Typography
          component="p"
          gutterBottom
          color="white"
          sx={{
            textAlign: "left",
            mt: 3,
            mb: 3,
            color: "lightgrey",
          }}
        >
          Warning: the YouTube algorithm is amazing and there might be some
          relevant plays in there that have counted towards my history but might
          have auto-played when I was distracted, out of the room, or even
          asleep! The bottom line is that the videos that have the highest play
          count are the most are the ones I love the most.
          <br></br>
          TABLE CLICK: Click on a video to pull it up on this page. If you’d
          like to check out that channel, click on the video’s title once it’s
          been rendered
          <br></br>
          PARAGRAPH ICON: This means I’ve written a little more about how a
          particular video might have impacted me as a music fan or creator. See
          below the YouTube video for some added context!
          <br></br>
          DATA SOURCE: December 2018 to October 2022
          <br></br>
          MONTH CLICK: Click on a month bar to filter the table to that month!
        </Typography>
      </Container>

      {/* parent div */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ p: 1 }}
      >
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
            WRITING={WRITING}
          ></Blockquote>
        </Grid>

        {/* barchart + table */}
        <Grid item lg={6} xs={12}>
          <ChannelDropdown
            data={data}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            setSelectedVideo={setSelectedVideo}
            setSelectedMonth={setSelectedMonth}
          ></ChannelDropdown>
          <ParentSize
            className="graph-container"
            debounceTime={10}
            style={{ marginTop: "12px", marginBottom: "6px" }}
          >
            {({ width: visWidth, height: visHeight }) => (
              <WatchBarChart
                data={data}
                selectedChannel={selectedChannel}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                width={visWidth}
                height="164"
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
      </Grid>
      <Container maxWidth="lg">
        <Typography
          component="p"
          // gutterBottom
          color="white"
          sx={{ textAlign: "center", mt: 3, mb: 3, color: "lightgrey" }}
        >
          I had a lot of fun making this! This was my first larger React.js
          project after years of developing in R/Shiny and dashboarding tools
          like Google Data Studio and Power BI! If you're curious to learn more,
          you can visit the GitHub repo here!
          <br></br>
          <br></br>
          {/* TODO: personal site etc */}
        </Typography>
      </Container>
    </Container>
  );
}

export default App;
