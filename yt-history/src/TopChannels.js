import * as Plot from "@observablehq/plot";
import { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

//DATA//
//DONE: get years from data and update dropdown dynamically

//PLOT//
//TODO: text
//TODO: plot title
//FIXME: 0s when no data

//UI//
//TODO: cool slider for year input

function TopChannels({ data, childToParent }) {
  const [year, setYear] = useState("2019");

  //set ref to append to
  const ref = useRef();

  //create plot and use ref to append
  //dependency array is set to stateful data
  //notice the above data request is only run once (no dependency)
  useEffect(() => {
    //if no data, back out
    if (data === undefined) return;

    let data2 = data.filter((d) => d.year === Number(year));

    //create chart
    const chart = Plot.plot({
      marks: [
        Plot.barX(data2, Plot.groupY({ x: "count" }, { y: "channel_name" })),
        // Plot.textX(data2, Plot.groupY({ x: "count" }, { y: "channel_name" })),
      ],
      margin: 80,
      width: window.innerWidth,
      height: 2500,
      inset: 10,
      marginLeft: 300,
      x: {
        label: null,
      },
      y: {
        label: null,
        domain: d3.groupSort(
          data2,
          (g) => g.length * -1,
          (d) => d.channel_name
        ),
      },
      style: {
        background: "#282c34",
        fontSize: 25,
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
      ref={ref}
      onClick={(e) => {
        //TODO: check if parent is the "bar" group
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
