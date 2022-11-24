import {
  tidy,
  groupBy,
  count,
  arrange,
  desc,
  filter,
  mutate,
} from "@tidyjs/tidy";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

//TODO: style column header (bold)
//TODO: avatars in table?
//TODO: better fonts
//TODO: special button icon inline if i wrote something
//TODO: bars/styling for playcount?
//DONE: add column descriptions (description key)

const columns = [
  {
    field: "channel_name",
    headerName: "Channel Name",
    flex: 0.65,
    minWidth: 100,
    hideable: false,
    description: "Channel Name: YouTube Channel Name",
    renderCell: (params) => {
      return (
        <Chip
          avatar={
            <Avatar alt={params.value} src={`avatar/${params.value}.jpg`} />
          }
          label={params.value}
          variant="outlined"
          sx={{ color: "white", borderColor: null }}
          onClick={(e) => console.log(e)}
        />
      );
    },
  },
  {
    field: "video_title",
    headerName: "Video Title",
    flex: 1.5,
    minWidth: 100,
    hideable: false,
    description: "Video Title: YouTube Video Title",
  },
  {
    field: "count",
    headerName: "Ben's Playcount",
    flex: 0.5,
    minWidth: 50,
    hideable: false,
    description: "Ben's Playcount: Total playcount for 2019-2022",
  },
];

function TopVideosTable({ data, selectedChannel, setSelectedVideo }) {
  //tidyjs for data manipulation (akin to tidyverse)
  const tidyData = tidy(
    data,
    filter((d) =>
      selectedChannel !== "All Channels"
        ? d.channel_name === selectedChannel
        : true
    ),
    //group by the primary fields and then count
    groupBy(
      ["channel_name", "video_title", "video_url"],
      [count("channel_name", { name: "count" })]
    ),
    //arrange in descending order based on the count
    arrange(desc("count")),
    mutate({ avatar: (d) => d.channel_name })
  );

  return (
    <>
      {/* <Typography component="p" color="white">
        Select a row to play and see channel stats
      </Typography> */}
      <div style={{ height: 317, width: "100%" }}>
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
              }}
              rows={tidyData}
              columns={columns}
              getRowId={(e) => e.video_url}
              hideFooter
              disableColumnMenu
              onRowClick={(e) => {
                setSelectedVideo(e.id);
                // childToParent(e.row.channel_name);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopVideosTable;
