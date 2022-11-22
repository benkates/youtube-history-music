import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";
import { filter, rollup, timeMonth, utcFormat } from "d3";
import { Card, Typography } from "@mui/material";

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
        : filter(data, (d) => d.channel_name === selectedChannel);

    //aggregate the data
    data2 = rollup(
      data2,
      (v) => v.length,
      (d) => timeMonth.floor(d.timestamp)
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
        tickFormat: utcFormat("%b '%y"),
        // range: [new Date("2019-01-01"), new Date("2022-12-31")],
      },
      //styling
      width: 700,
      margin: 25,
      height: 500,
      grid: true,
      style: {
        // background: "#282c34",
        fontSize: "0.75em",
        color: "black",
      },
    });

    //append chart
    ref.current.append(chart);

    //on unmount: remove chart
    return () => chart.remove();
  }, [data, selectedChannel]); //depend on stateful vars

  return (
    <Card sx={{ padding: 3 }}>
      <div id="watch-timeline" ref={ref}></div>
    </Card>
  );
}

export default WatchTimeline;
