import { tidy, groupBy, count, arrange, desc, sliceHead } from "@tidyjs/tidy";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

//TODO: add column descriptions (description key)

const columns = [
  {
    field: "channel_name",
    headerName: "Channel Name",
    flex: 0.5,
    minWidth: 100,
    hideable: false,
  },
  {
    field: "video_title",
    headerName: "Video Title",
    flex: 1.5,
    minWidth: 100,
    hideable: false,
  },
  {
    field: "count",
    headerName: "Ben's Playcount",
    flex: 0.5,
    minWidth: 50,
    hideable: false,
    // description: "test",
  },
];

function TopVideos({ data, childToParent, childToParentVideo }) {
  //tidyjs for data manipulation (akin to tidyverse)
  const tidyData = tidy(
    data,
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
      <Typography component="p" color="white">
        Select a row to play and see channel stats
      </Typography>
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
              // initialState={{
              //   sorting: {
              //     sortModel: [{ field: "count", sort: "desc" }],
              //   },
              // }}
              // pageSize={10}
              hideFooter
              disableColumnMenu
              // rowsPerPageOptions={[10]}
              onRowClick={(e) => {
                childToParentVideo(e.id);
                childToParent(e.row.channel_name);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopVideos;
