import "./App.css";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import truncate from "lodash/truncate";
import TopChannels from "./TopChannels";
import WatchTimeline from "./WatchTimeline";
import VideoEmbed from "./VideoEmbed";

//TODO: remove "https://youtube.com/" from video/channel IN R stuff to reduce data size
//TODO: use UIKit library for everything (ie: dropdowns are weird)
//DONE: barchart to filter timeline

/*
- what is the trend of watch activity over time for a specific channel
- what video (per channel) have i watched the most?
- who have i watched the most consistently?

- info on embedding a small "subscribe" button https://developers.google.com/youtube/youtube_subscribe_button
- info on embedding iframes https://developers.google.com/youtube/iframe_api_reference
*/

function App() {
  //init data state
  const [data, setData] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState();

  const childToParent = (childdata) => {
    setSelectedChannel(childdata);
  };

  //get data and set it
  useEffect(() => {
    console.log("fetching data");
    d3.json("top_watch_history.json")
      .then((d) => {
        d.map((e) => {
          e.timestamp = new Date(e.timestamp);
          e.year = e.timestamp.getFullYear();
          e.channel_name_full = e.channel_name;
          e.channel_name = truncate(e.channel_name, { length: 25 });
        });
        return d;
      })
      .then(setData);
  }, []);

  //TODO: cool slider
  return (
    <div className="App">
      <h1>Ben's YouTube History</h1>
      <WatchTimeline
        data={data}
        selectedChannel={selectedChannel}
      ></WatchTimeline>
      <VideoEmbed data={data} selectedChannel={selectedChannel}></VideoEmbed>
      <TopChannels data={data} childToParent={childToParent}></TopChannels>
      //TODO: rename fun
    </div>
  );
}

export default App;
