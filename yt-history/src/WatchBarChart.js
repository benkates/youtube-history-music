import { tidy, groupBy, count, filter, arrange, asc } from "@tidyjs/tidy";

import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { scaleBand, scaleLinear } from "@visx/scale";

//TODO: animated transition of bars
//TODO: sort months correctly
//TODO: onclick filter table to that month
//TODO: fixed axis for dates (always jan '19 to oct '22, shows blanks if no data)
//TODO: colorscale bars
//TODO: tooltip contains current filter
//DONE: tooltip correct
//DONE: responsive (use visx repsonsive component)

const verticalMargin = 0;

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: "black",
  color: "white",
};
let tooltipTimeout = 0;

// accessors
const getMonth = (d) => d.month;
const getFreq = (d) => Number(d.count);

function WatchBarChart({ data, selectedChannel, width, height }) {
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

  // scales, memoize for performance
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

  return (
    <>
      <div ref={containerRef}>
        {/* <span style={{ color: "white" }}>{selectedChannel}</span> */}
        <svg width="100%" height={height} transform="translate(0 6)">
          <Group top={verticalMargin / 2}>
            {dataPrepped.map((d) => {
              const month = getMonth(d);
              const barWidth = xScale.bandwidth();
              const barHeight = yMax - (yScale(getFreq(d)) ?? 0);
              const barX = xScale(month);
              const barY = yMax - barHeight;
              return (
                <Bar
                  key={`bar-${month}`}
                  x={barX}
                  y={Number(barY)}
                  width={barWidth}
                  height={barHeight}
                  fill="#556cd6"
                  onMouseMove={(e) => {
                    if (tooltipTimeout) clearTimeout(tooltipTimeout);
                    const eventSvgCoords = localPoint(e);
                    const left = barX + barWidth / 2;
                    showTooltip({
                      tooltipData: d,
                      tooltipTop: eventSvgCoords?.y,
                      tooltipLeft: left,
                    });
                  }}
                  onMouseLeave={() => {
                    tooltipTimeout = window.setTimeout(() => {
                      hideTooltip();
                    }, 500);
                  }}
                  onClick={(e) => {
                    console.log(d);
                  }}
                />
              );
            })}
          </Group>
        </svg>
      </div>
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
    </>
  );
}

export default WatchBarChart;
