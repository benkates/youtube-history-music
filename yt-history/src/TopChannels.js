import * as Plot from "@observablehq/plot";
import { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

//DATA//
//TODO: get years from data and update dropdown dynamically

//PLOT//
//TODO: count on bars
//TODO: plot title

//FIXME:

//UI//
//TODO: cool slider

function TopChannels({ data }) {
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
      margin: 80,
      width: 1000,
      height: 2500,
      inset: 10,
      marginLeft: 250,
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
      marks: [
        Plot.barX(data2, Plot.groupY({ x: "count" }, { y: "channel_name" })),
      ],
      style: {
        background: "#282c34",
        fontSize: 20,
        color: "white",
      },
    });

    //append chart
    ref.current.append(chart);

    //on unmount: remove chart
    return () => chart.remove();
  }, [data, year]); //depend on data

  return (
    <div ref={ref}>
      <label htmlFor="year">Select a Year</label>
      <br></br>
      <select
        name="year"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ fontSize: "inherit" }}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default TopChannels;
