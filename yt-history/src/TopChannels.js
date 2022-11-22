import * as Plot from "@observablehq/plot";
import { useEffect, useState, useRef } from "react";
import { groupSort } from "d3";

//DATA//
//DONE: get years from data and update dropdown dynamically

//PLOT//
//TODO: count as text?
//TODO: plot title

//UI//
//TODO: cool slider for year input
//TODO: arrow for scroll indication

function TopChannels({ data, childToParent }) {
  //set reactive year
  const [year, setYear] = useState("2019");

  //set ref to append to
  const ref = useRef();

  //create plot and use ref to append
  //the dependency array is set to stateful data
  useEffect(() => {
    //if no data, back out
    if (data === undefined) return;

    //filter data
    let data2 = data.filter((d) => d.year === Number(year));

    //create chart
    const chart = Plot.plot({
      //bar plot
      marks: [
        Plot.barX(data2, Plot.groupY({ x: "count" }, { y: "channel_name" })),
        Plot.ruleY([0], { stroke: null }),
        // Plot.textX(data2, Plot.groupY({ x: "count" }, { y: "channel_name" })),
      ],
      //x-axis style
      x: {
        label: null,
      },
      //y-axis style (sort)
      y: {
        label: null,
        domain: groupSort(
          data2,
          (g) => g.length * -1,
          (d) => d.channel_name
        ),
      },
      //style
      margin: 80,
      width: window.innerWidth,
      height: 2500,
      inset: 10,
      marginLeft: 150,
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
  }, [data, year]); //depend on data

  return (
    <div
      id="top-channels"
      // style={{ height: 480, overflowY: "auto" }} //scroll in place
      ref={ref}
      //when clicking on text, set the state
      onClick={(e) => {
        if (e.target.tagName === "text") {
          childToParent(e.target.__data__);
        }
      }}
    >
      <label htmlFor="year">Select a Year</label>
      <br></br>
      <select
        name="year"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ fontSize: "inherit" }}
      >
        {/* render UI dropdown */}
        {[2019, 2020, 2021, 2022].map((e) => {
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

export default TopChannels;
