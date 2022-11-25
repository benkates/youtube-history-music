import { tidy, groupBy, count, filter, arrange, asc } from "@tidyjs/tidy";
import { useEffect } from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft } from "@visx/axis";
import { format } from "d3";
import { darken } from "@mui/material";
import { GridRows } from "@visx/grid";

//TODO: animated transition of bars on change of top level channel (although you cant really see much)
//TODO: sort months correctly
//TODO: fixed axis for dates (always jan '19 to oct '22, shows blanks if no data)
//TODO: Can’t see axis on mobile
//TODO: Month indicator cutoff in mobile

//DONE: reset month on change
//DONE: onclick filter table to that month
//DONE: colorscale bars
//DONE: tooltip is under video
//DONE: tooltip contains current filter
//DONE: tooltip correct
//DONE: responsive (use visx repsonsive component)

const verticalMargin = 0;

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: "black",
  color: "white",
  zIndex: 2,
  borderRadius: "4px",
  border: "1px solid grey",
};
let tooltipTimeout = 0;

// accessors
const getMonth = (d) => d.month;
const getFreq = (d) => Number(d.count);

function WatchBarChart({
  data,
  selectedChannel,
  selectedMonth,
  setSelectedMonth,
  width,
  height,
}) {
  //tooltip hook pt 1
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip();

  //tooltip hook pt 2
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  });

  //prep data
  const dataPrepped = tidy(
    data,
    //sort by timestamp
    arrange(asc("timestamp")),
    //filter seleted channel
    filter((d) =>
      selectedChannel === "All Channels"
        ? true
        : d.channel_name === selectedChannel
    ),
    //group by the primary fields and then count
    groupBy(["month"], [count("month", { name: "count" })])
  );

  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, (can be memoized)
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: dataPrepped.map(getMonth),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...dataPrepped.map(getFreq))],
  });

  const colorScale = scaleLinear({
    range: ["lightgrey", "#556CD6"],
    domain: [0, Math.max(...dataPrepped.map(getFreq))],
  });

  useEffect(() => {
    setSelectedMonth(null);
  }, [setSelectedMonth]);

  return (
    <>
      <div ref={containerRef}>
        <svg
          width="100%"
          height={height}
          transform="translate(0 0)"
          style={{ overflow: "overlay" }}
          onClick={(e) =>
            e.target.tagName !== "rect" ? setSelectedMonth(null) : true
          }
        >
          <GridRows
            scale={yScale}
            width={xMax}
            height={yMax}
            stroke="#444444"
          />
          <AxisLeft
            scale={yScale}
            key="axisLeft"
            stroke="white"
            tickStroke="white"
            numTicks={3}
            hideAxisLine={true}
            hideTicks={true}
            tickFormat={(d) => format(".0f")(d)}
            tickLabelProps={() => {
              return {
                fill: "grey",
                transform: "translate(5,4)",
                textAnchor: "end",
                fontSize: 10,
              };
            }}
          />
          <Group top={verticalMargin / 2}>
            {dataPrepped.map((d) => {
              const month = getMonth(d);
              const barWidth = xScale.bandwidth();
              const barHeight = yMax - (yScale(getFreq(d)) ?? 0);
              const barX = xScale(month);
              const barY = yMax - barHeight;

              let color = colorScale(getFreq(d));
              //if it's the month, make it stand out
              if (selectedMonth !== null && d.month === selectedMonth) {
                color = "#32A287";
              }
              //if it's not the month, make it darker
              if (selectedMonth !== null && d.month !== selectedMonth) {
                color = darken(color, 0.5);
              }
              return (
                <Bar
                  key={`bar-${month}`}
                  x={barX}
                  y={Number(barY)}
                  width={barWidth}
                  height={barHeight}
                  fill={color}
                  rx={2}
                  onMouseMove={(e) => {
                    if (tooltipTimeout) clearTimeout(tooltipTimeout);
                    //localPoint will get the exact svg coords
                    const eventSvgCoords = localPoint(e);
                    const left = barX + barWidth / 2;
                    showTooltip({
                      tooltipData: d, //data of the mapped array
                      tooltipTop: eventSvgCoords?.y,
                      tooltipLeft: left,
                    });
                  }}
                  //remove tooltip on mosuse out
                  onMouseLeave={() => {
                    tooltipTimeout = window.setTimeout(() => {
                      hideTooltip();
                    }, 500);
                  }}
                  //set month on click
                  onClick={() => {
                    //if the selected month is the same as the state var, reset it
                    if (d.month === selectedMonth) {
                      setSelectedMonth(null);
                      //otherwise set it
                    } else {
                      setSelectedMonth(d.month);
                    }
                  }}
                />
              );
            })}
          </Group>

          {/* MONTH TEXT START */}
          {selectedMonth && (
            <g>
              <text style={{ fill: "white" }} x={width} y={10} textAnchor="end">
                {`Month: ${selectedMonth}`}
              </text>
              <text
                style={{ fill: "white", cursor: "pointer" }}
                x={width}
                y={30}
                textAnchor="end"
                textDecoration="underline"
                font-size="12px"
              >
                reset
              </text>
            </g>
          )}
          {/* MONTH TEXT END */}
        </svg>
      </div>

      {/* TOOLTIP START */}
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div style={{ color: "white" }}>
            <strong>{tooltipData.month}</strong>
          </div>
          <div>
            <small>Playcount: {tooltipData.count}</small>
            <br />
            <small>{selectedChannel}</small>
          </div>
        </TooltipInPortal>
      )}
      {/* TOOLTIP END */}
    </>
  );
}

export default WatchBarChart;
