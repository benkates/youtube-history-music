import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

//DATA//

//PLOT//
//TODO: bar chart instead of line (rectY?)
//TODO: add title
//TODO: fixed axis for dates (always jan '19 to oct '22)
//DONE: shorten date format

//UI//
//DONE: dropdown to show: 1. Saturday Night Live (watched 1,500 videos)

function WatchTimeline({ data, selectedChannel }) {
  //declare ref
  const ref = useRef();

  useEffect(() => {
    //filter the data
    let data2 =
      selectedChannel === undefined
        ? data
        : d3.filter(data, (d) => d.channel_name === selectedChannel);

    //aggregate the data
    data2 = d3.rollup(
      data2,
      (v) => v.length,
      (d) => d3.timeMonth.floor(d.timestamp)
    );

    //catch data if none
    if (data2 === undefined) return;

    //plot
    const chart = Plot.plot({
      //lines
      marks: [
        Plot.line(data2, {
          x: (d) => d[0],
          y: (d) => d[1],
        }),
        Plot.ruleY([0], { stroke: null }),
      ],
      //set x axis formatting
      x: {
        tickFormat: d3.utcFormat("%b '%y"),
        // range: [new Date("2019-01-01"), new Date("2022-12-31")],
      },
      //styling
      width: window.innerWidth,
      margin: 100,
      height: 500,
      grid: true,
      style: {
        background: "#282c34",
        fontSize: "0.75em",
        color: "white",
      },
    });

    //append chart
    ref.current.append(chart);

    //on unmount: remove chart
    return () => chart.remove();
  }, [data, selectedChannel]); //depend on stateful vars

  return <div id="watch-timeline" ref={ref}></div>;
}

export default WatchTimeline;
