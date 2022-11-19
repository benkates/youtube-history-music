import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

//DATA//

//PLOT//
//TODO: bar chart instead of line (rectY?)
//TODO: add title
//TODO: fixed axis for dates
//DONE: shorten dates

//UI//
//DONE: dropdown to show: 1. Saturday Night Live (watched 1,500 videos)

function WatchTimeline({ data, selectedChannel }) {
  const ref = useRef();
  // const [channelName, setChannelName] = useState("all");

  // const channelList = d3
  //   .flatRollup(
  //     data,
  //     (v) => v.length,
  //     (d) => d.channel_name,
  //     (e) => e.channel_name_full
  //   )
  //   .sort((a, b) => b[2] - a[2]);

  useEffect(() => {
    //aggregate the data

    let data2 =
      selectedChannel === undefined
        ? data
        : d3.filter(data, (d) => d.channel_name === selectedChannel);

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
        Plot.ruleY([0], { stroke: null }),
      ],
      x: {
        tickFormat: d3.utcFormat("%b '%y"),
        // range: [new Date("2019-01-01"), new Date("2022-12-31")],
      },
      width: window.innerWidth,
      margin: 100,
      height: 500,
      grid: true,
      style: {
        background: "#282c34",
        fontSize: "0.5em",
        color: "white",
        // margin: "2em",
        // position: "fixed",
      },
    });

    //append chart
    ref.current.append(chart);

    //on unmount: remove chart
    return () => chart.remove();
  }, [data, selectedChannel]);

  return (
    <div id="watch-timeline" ref={ref}>
      {/* <label htmlFor="year">Select a Channel</label>
      <br></br>
      <select
        name="year"
        id="year"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        style={{ fontSize: 16 }}
      >
        <option value="all" key="all">
          All Channels
        </option>
        {channelList.map((e, i) => {
          return (
            <option value={e[0]} key={e[0]}>
              {`${i + 1}: ${e[1]} (watched ${d3.format(",")(e[2])} times)`}
            </option>
          );
        })}
      </select> */}
    </div>
  );
}

export default WatchTimeline;
