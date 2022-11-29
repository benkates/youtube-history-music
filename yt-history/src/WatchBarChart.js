import { tidy, groupBy, count, filter, arrange, asc } from "@tidyjs/tidy";
import { useEffect } from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { format, timeFormat } from "d3";
import { darken } from "@mui/material";
import { GridRows } from "@visx/grid";

import { Annotation, Connector, Label } from "@visx/annotation";
import theme from "./utils/theme";

//HOLD: animated transition of bars on change of top level channel (although you cant really see much)
//HOLD: fixed axis for dates (always jan '19 to oct '22, shows blanks if no data)

//DONE: too many axis lines for low count
//DONE: x-axis label more padding
//DONE: Fade in annotation
//DONE: annotation on vulf spike
//DONE: sort months correctly
//DONE: 0 axis label cutoff on safari
//DONE: Can’t see axis on mobile
//DONE: Month indicator cutoff in mobile
//DONE: reset month on change
//DONE: onclick filter table to that month
//DONE: colorscale bars
//DONE: tooltip is under video
//DONE: tooltip contains current filter
//DONE: tooltip correct
//DONE: responsive (use visx repsonsive component)

const verticalMargin = 25;

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
    groupBy(["month", "month_label"], [count("month", { name: "count" })])
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
    range: [yMax, verticalMargin / 2],
    round: true,
    domain: [0, Math.max(...dataPrepped.map(getFreq))],
    padding: 0.3,
  });

  const colorScale = scaleLinear({
    range: ["lightgrey", theme.palette.accentColor],
    domain: [0, Math.max(...dataPrepped.map(getFreq))],
  });

  //format the tick to exclude decimals
  //exclude 0 (awkward placement on small screens)
  const yTickFormatter = (d) => {
    let r = d > 0 ? format(".0f")(d) : "";
    return r;
  };

  //set selectedMonth state var to null
  useEffect(() => {
    setSelectedMonth(null);
  }, [setSelectedMonth]);

  //the Vulf channel spike needs an annotation to explain
  const vulfAnnoation =
    selectedChannel === "Vulf" ? (
      <>
        <svg>
          <Annotation
            x={xScale(
              new Date(
                "Wed Aug 01 2020 00:00:00 GMT-0400 (Eastern Daylight Time)"
              )
            )}
            y={yScale(51)} // y value of label
            dx={25} // x offset of label from subject
            dy={25} // y offset of label from subject
            className="fade-in"
          >
            <Connector stroke="#fff" />
            {/* <LineSubject stroke="#fff" min /> */}
            <Label
              title="High spike in Vulf views!"
              subtitle="This was probably a combination of going down a Vulfpeck rabbit hole with my good friend Virginia and subsequently falling asleep with autoplay on!"
              backgroundFill={theme.palette.primary.main}
              fontColor="white"
              backgroundPadding={15}
              subtitleFontSize={10}
              titleProps={{ transform: "translate(-5,0)" }}
              subtitleProps={{
                transform: "translate(-5,0)",
                textWrap: "normal",
              }}
              width={width > 500 ? width / 2 : width / 2}
              showAnchorLine={false}
              backgroundProps={{ rx: "4px" }}
            />
          </Annotation>
        </svg>
      </>
    ) : null;

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
          <g style={{ transform: `translate(0, -${verticalMargin / 2}px)` }}>
            <GridRows
              scale={yScale}
              width={xMax - 15}
              height={yMax}
              stroke="#444444"
              numTicks={6}
              transform={`translate(15,${verticalMargin / 2})`}
            />
            <AxisLeft
              scale={yScale}
              key="axisLeft"
              stroke="white"
              tickStroke="white"
              numTicks={3}
              hideAxisLine={true}
              hideTicks={true}
              tickFormat={yTickFormatter}
              tickLabelProps={() => {
                return {
                  fill: "grey",
                  transform: `translate(20,${verticalMargin / 2})`,
                  dominantBaseline: "middle",
                  textAnchor: "end",
                  fontSize: 10,
                };
              }}
            />
            <AxisBottom
              scale={xScale}
              key="axisBottom"
              numTicks={3}
              hideAxisLine={true}
              hideTicks={true}
              tickFormat={(d) => timeFormat("%b '%y")(d)}
              tickLabelProps={() => {
                return {
                  y: height,
                  fill: "grey",
                  transform: "translate(-7.5,0)",
                  textAnchor: "center",
                  dominantBaseline: "middle",
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
                if (selectedMonth !== null && d.month_label === selectedMonth) {
                  color = "#32A287";
                }
                //if it's not the month, make it darker
                if (selectedMonth !== null && d.month_label !== selectedMonth) {
                  color = darken(color, 0.5);
                }
                return (
                  <Bar
                    key={`bar-${month}`}
                    x={barX + 7.5}
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
                        tooltipTop: eventSvgCoords?.y + 5,
                        tooltipLeft: left + 5,
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
                      if (d.month_label === selectedMonth) {
                        setSelectedMonth(null);
                        //otherwise set it
                      } else {
                        setSelectedMonth(d.month_label);
                      }
                      //scroll to top of table
                      document.querySelector(
                        ".MuiDataGrid-virtualScroller"
                      ).scrollTop = 0;
                    }}
                  />
                );
              })}
            </Group>

            {/* MONTH TEXT START */}
            {selectedMonth && (
              <g>
                <text
                  style={{ fill: "white" }}
                  x={width}
                  y={12}
                  textAnchor="end"
                >
                  {`Month: ${selectedMonth}`}
                </text>
                <text
                  style={{ fill: "white", cursor: "pointer" }}
                  x={width}
                  y={30}
                  textAnchor="end"
                  textDecoration="underline"
                  fontSize="12px"
                >
                  reset
                </text>
              </g>
            )}
            {/* MONTH TEXT END */}
            {vulfAnnoation}
          </g>
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
            <strong>{tooltipData.month_label}</strong>
          </div>
          <div>
            <small>Ben's Views: {tooltipData.count}</small>
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
