import { tidy, groupBy, count, arrange, desc, filter } from "@tidyjs/tidy";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import ChipAvatar from "./utils/ChipAvatar";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import theme from "./utils/theme";

//HOLD: bars/styling for playcount?

//DONE: checkbox bool field for quote sorting/filtering
//DONE: Different font size on mobile for col titles? it's cutoff (.col-header-center)
//DONE: alternating row stripes
//DONE: special button icon inline if i wrote something (npm install @mui/icons-material) https://mui.com/material-ui/icons/`
//DONE: Reset table scroll on month filter and channel filter https://mui.com/x/react-data-grid/scrolling/#main-content
//DONE: paragraph icon indicates text
//DONE: search bar underline to be white
//DONE: search bar
//DONE: Put pencil before text in table
//DONE: style column header (bold)
//DONE: avatars in table?
//DONE: add column descriptions (description key)

function TopVideosTable({
  data,
  selectedChannel,
  setSelectedVideo,
  selectedMonth,
  WRITING,
}) {
  // create custom toolbar with the quote icon guide and search bar
  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ justifyContent: "space-between" }}>
        <div style={{ cursor: "default", marginLeft: 8 }}>
          <FormatQuoteIcon sx={{ width: 16, height: 16 }}>
            <text>Test</text>
          </FormatQuoteIcon>
          <span style={{ fontSize: 10 }}>text below video</span>
        </div>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  }

  //define columns and styling
  const columns = [
    {
      field: "channel_name",
      headerName: "Channel",
      flex: 0.65,
      minWidth: 100,
      hideable: false,
      headerClassName: "col-header-center",
      description: "YouTube Channel Name",
      // use custom component to render value
      renderCell: (d) => {
        return <ChipAvatar name={d.value}></ChipAvatar>;
      },
    },
    {
      field: "quote",
      renderHeader: () => {
        return <FormatQuoteIcon sx={{ width: "1rem", height: "1rem" }} />;
      },
      flex: 0.15,
      minWidth: 32,
      hideable: false,
      type: "boolean",
      headerClassName: "quote-col",
      headerAlign: "center",
      //lookup if video url exists in the writing (boolean)
      valueGetter: (d) => {
        return WRITING.some((e) => e.video_url === d.row.video_url);
      },
      //based on true/false, render the icon
      renderCell: (d) => {
        return d.value ? (
          <FormatQuoteIcon sx={{ width: "1rem", height: "1rem" }} />
        ) : (
          ""
        );
      },
      description: "Whether or not text commentary exists for video",
      align: "center",
    },
    {
      field: "video_title",
      headerName: "Video",
      flex: 1.5,
      headerClassName: "col-header-center",
      minWidth: 100,
      hideable: false,
      description: "YouTube Video Title",
    },
    {
      field: "count",
      headerName: "Views",
      type: "number",
      headerClassName: "col-header-center",
      headerAlign: "center",
      flex: 0.35,
      minWidth: 60,
      hideable: false,
      description: "Ben's total views for imported data",
      align: "center",
    },
  ];

  //tidyjs for data manipulation (akin to tidyverse)
  const tidyData = tidy(
    data,
    // filter data to selected channel if active
    filter((d) =>
      selectedChannel !== "All Channels"
        ? d.channel_name === selectedChannel
        : true
    ),
    //filter data to month if active
    filter((d) =>
      selectedMonth === null ? true : d.month_label === selectedMonth
    ),
    //group by the primary fields and then count
    groupBy(
      ["channel_name", "video_title", "video_url"],
      [count("channel_name", { name: "count" })]
    ),
    //arrange in descending order based on the count
    arrange(desc("count"))
  );

  return (
    <>
      {/* height is exactly 5 rows tall */}
      <div style={{ height: 358, width: "100%" }}>
        <div
          style={{
            display: "flex",
            height: "100%",
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          {/* render data grid with styling */}
          <DataGrid
            sx={{
              color: "white",
              "& .MuiDataGrid-cell:hover": {
                color: theme.palette.orangeColor,
              },
              //
              "& .MuiButtonBase-root": {
                color: "white !important",
              },
              //striped row
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: theme.palette.orangeColor + "35",
              },
              fontFamily: "Roboto",
            }}
            rows={tidyData}
            columns={columns}
            getRowId={(e) => e.video_url} //use video_url for id
            //disable a lot of unnecessary features
            hideFooter
            disableColumnMenu
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            //use modulo to get even/odd styling for striped look
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0
                ? "even-row"
                : "odd-row"
            }
            //when clicking a row, set the selected video and scroll to the iframe
            onRowClick={(e) => {
              setSelectedVideo(e.id);
              document
                .getElementById("video-embed-blockquote")
                .scrollIntoView({ behavior: "smooth" });
            }}
            //add in the custom toolbar with quote icon and search bar
            components={{ Toolbar: CustomToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 200 },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default TopVideosTable;
