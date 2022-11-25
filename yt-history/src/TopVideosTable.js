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
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

//TODO: special button icon inline if i wrote something (npm install @mui/icons-material) https://mui.com/material-ui/icons/
//TODO: bars/styling for playcount?
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
            {d.value}
            {WRITING.some((e) => e.video_url === d.rowNode.id) && (
              <CreateOutlinedIcon
                sx={{ ml: 1, width: 16, height: 16 }}
              ></CreateOutlinedIcon>
            )}
          </>
        );
      },
    },
    {
      field: "count",
      headerName: "Playcount",
      type: "number",
      headerClassName: "col-header-center col-header-center",
      headerAlign: "center",
      style: { color: "red" },
      flex: 0.5,
      minWidth: 50,
      hideable: false,
      description: "Ben's Playcount: Total playcount for 2019-2022",
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
    arrange(desc("count")),
    mutate({ avatar: (d) => d.channel_name })
  );

  return (
    <>
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
