import { tidy, groupBy, count, arrange, desc, filter } from "@tidyjs/tidy";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

//HOLD: bars/styling for playcount?

//DONE: Different font size on mobile for col titles? it's cutoff (.col-header-center)
//DONE: alternating row stripes
//DONE: special button icon inline if i wrote something (npm install @mui/icons-material) https://mui.com/material-ui/icons/
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
  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ justifyContent: "space-between" }}>
        <div style={{ cursor: "default", marginLeft: 8 }}>
          <FormatQuoteIcon sx={{ width: 16, height: 16 }}></FormatQuoteIcon>
          <span style={{ fontSize: 10 }}>text below video</span>
        </div>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  }

  const columns = [
    {
      field: "channel_name",
      headerName: "Channel",
      flex: 0.65,
      minWidth: 100,
      hideable: false,
      headerClassName: "col-header-center",
      description: "YouTube Channel Name",
      renderCell: (d) => {
        return (
          <Chip
            avatar={<Avatar alt={d.value} src={`avatar/${d.value}.jpg`} />}
            label={d.value}
            variant="outlined"
            sx={{ color: "white", borderColor: null }}
            onClick={(e) => console.log(e)}
          />
        );
      },
    },
    {
      field: "video_title",
      headerName: "Video",
      flex: 1.5,
      headerClassName: "col-header-center",
      minWidth: 100,
      hideable: false,
      description: "YouTube Video Title",
      renderCell: (d) => {
        return (
          <>
            {WRITING.some((e) => e.video_url === d.rowNode.id) && (
              <FormatQuoteIcon
                sx={{ mr: 0.5, width: 16, height: 16 }}
              ></FormatQuoteIcon>
            )}
            {d.value}
          </>
        );
      },
    },
    {
      field: "count",
      headerName: "Plays",
      type: "number",
      headerClassName: "col-header-center col-header-center",
      headerAlign: "center",
      style: { color: "red" },
      flex: 0.5,
      minWidth: 50,
      hideable: false,
      description: "Total playcount for selected data",
      // cellClassName: "count-col-align-center",
      align: "center",
    },
  ];

  //tidyjs for data manipulation (akin to tidyverse)
  const tidyData = tidy(
    data,
    filter((d) =>
      selectedChannel !== "All Channels"
        ? d.channel_name === selectedChannel
        : true
    ),
    filter((d) => (selectedMonth === null ? true : d.month === selectedMonth)),
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
      <div style={{ height: 358, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1, cursor: "pointer" }}>
            <DataGrid
              sx={{
                color: "white",
                "& .MuiDataGrid-cell:hover": {
                  color: "primary.main",
                },
                "& .MuiButtonBase-root": {
                  color: "white !important",
                },
                fontFamily: "Roboto",
              }}
              rows={tidyData}
              columns={columns}
              getRowId={(e) => e.video_url}
              hideFooter
              disableColumnMenu
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0
                  ? "even-row"
                  : "odd-row"
              }
              onRowClick={(e) => {
                setSelectedVideo(e.id);
              }}
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
      </div>
    </>
  );
}

export default TopVideosTable;
