import "./App.css";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import truncate from "lodash/truncate";
import TopChannels from "./TopChannels";
import WatchTimeline from "./WatchTimeline";
import VideoEmbed from "./VideoEmbed";

//TODO: remove "https://youtube.com/" from video/channel IN R stuff to reduce data size
//TODO: use UIKit library for everything (ie: dropdowns are weird)
//TODO: rename childtoParent()
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
  const [selectedChannel, setSelectedChannel] = useState();

  //create fun to bring data from the child component (TopChannels) to App
  const childToParent = (childdata) => {
    setSelectedChannel(childdata);
  };

  //get data and set it
  useEffect(() => {
    console.log("fetching data");

    //get data
    d3.json("top_watch_history.json")
      .then((d) => {
        //iterate over, format, create new fields
        d.map((e) => {
          e.timestamp = new Date(e.timestamp);
          e.year = e.timestamp.getFullYear();
          e.channel_name_full = e.channel_name;
          e.channel_name = truncate(e.channel_name, { length: 25 });
        });
        return d;
      })
      //set the stateful data
      .then(setData);
  }, []);

  return (
    <div className="App">
      <h1>Ben's YouTube History</h1>
      <div style={{ display: "flex" }}>
        <TopChannels data={data} childToParent={childToParent}></TopChannels>
        <VideoEmbed data={data} selectedChannel={selectedChannel}></VideoEmbed>
      </div>
      <br></br>
      <WatchTimeline
        data={data}
        selectedChannel={selectedChannel}
      ></WatchTimeline>
    </div>
  );
}

export default App;
