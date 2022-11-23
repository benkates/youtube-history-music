import React, { useMemo } from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { GradientTealBlue } from "@visx/gradient";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";
import { tidy, groupBy, count, filter, arrange, asc } from "@tidyjs/tidy";
import { localPoint } from "@visx/event";

import letterFrequency, {
  LetterFrequency,
} from "@visx/mock-data/lib/mocks/letterFrequency";
import { scaleBand, scaleLinear } from "@visx/scale";

//TODO: animated

//TODO: tooltip correct
//TODO: responsive (use visx repsonsive component)

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
const getMonthFrequency = (d) => Number(d.count) * 100;

export default function WatchTimeline2({
  data,
  selectedChannel,
  width,
  height,
}) {
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  });

  const dataPrepped = tidy(
    data,
    arrange(asc("timestamp")),
    filter((d) => d.channel_name === selectedChannel),
    //group by the primary fields and then count
    groupBy(["month"], [count("month", { name: "count" })])
  );

  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        round: true,
        domain: dataPrepped.map(getMonth),
        padding: 0.4,
      }),
    [xMax, data]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...dataPrepped.map(getMonthFrequency))],
      }),
    [yMax, data]
  );

  return (
    <>
      <div ref={containerRef}>
        <svg width="100%" height={height}>
          <Group top={verticalMargin / 2}>
            {dataPrepped.map((d) => {
              const month = getMonth(d);
              const barWidth = xScale.bandwidth();
              const barHeight = yMax - (yScale(getMonthFrequency(d)) ?? 0);
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
                  onMouseMove={(event) => {
                    if (tooltipTimeout) clearTimeout(tooltipTimeout);
                    // TooltipInPortal expects coordinates to be relative to containerRef
                    // localPoint returns coordinates relative to the nearest SVG, which
                    // is what containerRef is set to in this example.
                    const eventSvgCoords = localPoint(event);
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
          </div>
        </TooltipInPortal>
      )}
    </>
  );
}
