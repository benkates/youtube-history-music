import * as Plot from "@observablehq/plot";
import { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

//DATA//
//TODO: sort list by most frequently watched (similar to TopChannels component)

//PLOT//
//TODO: bar chart instead of line (rectY?)
//TODO: shorten dates
//TODO: add title

//UI//
//TODO: dropdown to show: 1. Saturday Night Live (watched 1,500 videos)

function WatchTimeline({ data }) {
  const ref = useRef();
  const [channelName, setChannelName] = useState("all");

  const channelList = [...new Set(data.map((item) => item.channel_name))];

  useEffect(() => {
    //aggregate the data

    let data2 =
      channelName === "all"
        ? data
        : d3.filter(data, (d) => d.channel_name === channelName);

    data2 = d3.rollup(
      data2,
      (v) => v.length,
      (d) => d3.timeMonth.floor(d.timestamp)
    );

    if (data2 === undefined) return;

    const chart = Plot.plot({
      marks: [
        Plot.line(data2, {
          x: (d) => d[0],
          y: (d) => d[1],
        }),
      ],
      margin: 80,
      width: 1000,
      height: 500,
      style: {
        background: "#282c34",
        fontSize: "0.5em",
        color: "white",
      },
    });

    //append chart
    ref.current.append(chart);

    //on unmount: remove chart
    return () => chart.remove();
  }, [data, channelName]);

  return (
    <div ref={ref}>
      <label htmlFor="year">Select a Channel</label>
      <br></br>
      <select
        name="year"
        id="year"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        style={{ fontSize: "inherit" }}
      >
        <option value="all" key="all">
          All Channels
        </option>
        {channelList.map((e) => {
          return (
            <option value={e} key={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default WatchTimeline;
